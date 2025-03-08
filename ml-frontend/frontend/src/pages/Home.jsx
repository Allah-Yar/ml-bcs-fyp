import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // Optional: for navigation

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: 'lg',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #0d1321 0%, #1d3557 50%, #546e7a 100%)', // Cool gradient matching your theme
  borderRadius: 15,
  padding: theme.spacing(4),
  marginTop: theme.spacing(12), // Space for fixed navbar
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(10), // Adjusted for smaller screens
    borderRadius: 10,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly transparent white
  borderRadius: 12,
  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 35px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
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
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 3),
    fontSize: '1rem',
  },
}));

const Home = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            color: '#546e7a',
            fontWeight: 'bold',
            letterSpacing: 1.5,
            [theme => theme.breakpoints.down('sm')]: {
              fontSize: '2rem', // Smaller on mobile
            },
          }}
        >
          Welcome to ML Frontend
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          paragraph
          sx={{
            color: '#455a64',
            maxWidth: 600,
            margin: '0 auto',
            [theme => theme.breakpoints.down('sm')]: {
              fontSize: '1rem',
            },
          }}
        >
          A powerful platform for managing and visualizing machine learning models and data.
        </Typography>
        <StyledButton component={Link} to="/check">
          Get Started
        </StyledButton>
      </StyledBox>
    </StyledContainer>
  );
};

export default Home;
