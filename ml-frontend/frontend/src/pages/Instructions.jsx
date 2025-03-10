import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Instructions = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Instructions
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the Machine Learning Model Interface. Follow these steps to use the application:
          </Typography>
          <Typography variant="body1" paragraph>
            1. Upload your image using the upload button on the home page
          </Typography>
          <Typography variant="body1" paragraph>
            2. Wait for the model to process your image
          </Typography>
          <Typography variant="body1" paragraph>
            3. View the results and predictions displayed on the screen
          </Typography>
          <Typography variant="body1" paragraph>
            4. You can upload another image to get new predictions
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Note: Supported image formats include JPG, JPEG, and PNG. Please ensure your image is clear and well-lit for the best results.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Instructions;
