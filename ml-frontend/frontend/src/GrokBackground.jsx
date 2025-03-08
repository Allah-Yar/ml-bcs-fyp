import React from 'react';
import { Box } from '@mui/material';

const GrokBackground = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        // background: 'linear-gradient(135deg,rgb(0, 0, 2) 0%,rgb(5, 8, 15) 100%), ',
        background: 'linear-gradient(135deg, black 0%, #212121 100%)', // Simple dark gradient
        zIndex: -1, // Behind content
      }}
    />
  );
};

export default GrokBackground;