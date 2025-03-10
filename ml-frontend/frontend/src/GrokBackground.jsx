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
        background: "linear-gradient(135deg, #0d1321 0%, #1d3557 50%, #546e7a 100%)",
        zIndex: -1, // Behind content
      }}
    />
  );
};

export default GrokBackground;