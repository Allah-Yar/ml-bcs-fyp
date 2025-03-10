// Code for the ImageUploadForm component of the frontend
// This component is responsible for rendering the image upload form and handling the image classification process
import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
  Alert,
  Menu,
  MenuItem,
  Modal,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PredictionResult from './PredictionResult';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 600,
  width: '90%',
  margin: theme.spacing(3, 'auto'),
  background: 'linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)',
  borderRadius: 15,
  border: '1px solid rgba(84, 110, 122, 0.2)',
  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 35px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 'auto'),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 5),
  borderRadius: 30,
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  background: 'linear-gradient(45deg, #546e7a 30%, #78909c 90%)',
  color: 'white',
  boxShadow: '0 4px 15px rgba(84, 110, 122, 0.5)',
  transition: 'transform 0.2s ease, background 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #455a64 30%, #607d8b 90%)',
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(84, 110, 122, 0.7)',
  },
  '&:disabled': {
    background: '#b0bec5',
    boxShadow: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 3),
    fontSize: '1rem',
  },
}));

const ImagePreview = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 12,
  marginTop: theme.spacing(3),
  border: '2px solid #546e7a',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
    borderRadius: 8,
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 400,
  background: 'linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)',
  borderRadius: 15,
  padding: theme.spacing(3),
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(84, 110, 122, 0.2)',
}));

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setError('Please select or capture an image first');
      setModalOpen(true); // Open modal with error
      return;
    }

    setIsLoading(true);
    setError(null);
    setPrediction(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data.prediction);
      setModalOpen(true); // Open modal with result
    } catch (err) {
      setError('Error uploading image. Please try again.');
      setModalOpen(true); // Open modal with error
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChooseFileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUploadFromFile = () => {
    fileInputRef.current.click();
    handleMenuClose();
  };

  const handleCaptureWithCamera = async () => {
    handleMenuClose();

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.capture = 'environment';
      input.onchange = (event) => {
        handleFileSelect(event);
        input.remove();
      };
      input.click();
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();

        video.onloadedmetadata = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          canvas.toBlob((blob) => {
            const file = new File([blob], 'webcam-capture.jpg', { type: 'image/jpeg' });
            setSelectedFile(file);

            const reader = new FileReader();
            reader.onload = () => {
              setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);

            stream.getTracks().forEach(track => track.stop());
            video.remove();
            canvas.remove();
          }, 'image/jpeg', 0.95);
        };
      } catch (err) {
        setError('Error accessing webcam. Please ensure it’s connected and permissions are granted.');
        setModalOpen(true); // Open modal with error
        console.error('Webcam Error:', err);
      }
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setError(null); // Clear error when closing
    setPrediction(null); // Clear prediction when closing
    window.location.reload(); // Reload page to reset form
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        minHeight: '100vh',
        
        padding: { xs: 2, sm: 3 },
      }}
    >
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Image Classification
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={handleChooseFileClick}
              sx={{
                alignSelf: 'center',
                borderRadius: 8,
                padding: '10px 20px',
                background: 'linear-gradient(45deg, #546e7a 30%, #78909c 90%)',
                textTransform: 'none',
                fontSize: '16px',
                color: 'white',
                borderColor: '#546e7a',
                '&:hover': {
                    background: 'linear-gradient(45deg, #455a64 30%, #607d8b 90%)',
                  borderColor: '#212121',
                },
              }}
            >
              Choose File
            </Button>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <MenuItem onClick={handleUploadFromFile}>
                <UploadFileIcon sx={{ mr: 1, color: '#546e7a' }} />
                Upload from File
              </MenuItem>
              <MenuItem onClick={handleCaptureWithCamera}>
                <CameraAltIcon sx={{ mr: 1, color: '#546e7a' }} />
                Capture with Camera
              </MenuItem>
            </Menu>

            {previewUrl && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImagePreview src={previewUrl} alt="Preview" />
              </Box>
            )}

            <StyledButton
              type="submit"
              variant="contained"
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={30} color="inherit" /> : null}
            >
              {isLoading ? 'Processing...' : 'Classify Image'}
            </StyledButton>
          </Box>
        </form>

        {/* Modal for Result or Error */}
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="result-modal-title"
          aria-describedby="result-modal-description"
        >
          <ModalContent>
            {error ? (
              <Alert severity="error" sx={{ borderRadius: 8 }}>
                {error}
              </Alert>
            ) : prediction ? (
              <PredictionResult prediction={prediction} />
            ) : null}
            <Button
              onClick={handleModalClose}
              variant="outlined"
              sx={{
                marginTop: 2,
                alignSelf: 'center',
                color: 'white',
                background: 'linear-gradient(45deg, #546e7a 30%, #78909c 90%)',
                borderColor: '#546e7a',
                '&:hover': {
                    background: 'linear-gradient(45deg, #455a64 30%, #607d8b 90%)',
                  borderColor: '#212121',
                },
              }}
            >
              Close
            </Button>
          </ModalContent>
        </Modal>
      </StyledPaper>
    </Box>
  );
};

export default ImageUploadForm;