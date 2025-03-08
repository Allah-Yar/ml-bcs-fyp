import React from 'react';
import { Box, Typography } from '@mui/material';

const PredictionResult = ({ prediction }) => {
  if (!prediction) {
    return null;
  }

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Prediction Result
      </Typography>
      <Typography variant="body1" color="text.secondary">
        The predicted class is: <strong>{prediction}</strong>
      </Typography>
    </Box>
  );
};

export default PredictionResult;