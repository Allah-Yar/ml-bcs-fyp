

import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import HomePage from "../components/HomePage";
import Instructions from "../components/Instructions";
import ImageUploadForm from "../components/ImageUploadForm";
// import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";




const Home = () => {
  return (
    <div>
   
      <Box mt={6}>
        <HomePage />
      </Box>
      <Box mt={6} width="100%">
        <Instructions />
      </Box>
      <Box mt={6} width="100%">
        <ImageUploadForm />
      </Box>

    </div>
  );
};

export default Home;
