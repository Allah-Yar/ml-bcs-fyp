

// import React from "react";
// import { Container, Typography, Box, Button } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { Link } from "react-router-dom";

// const StyledContainer = styled(Container)(({ theme }) => ({
//   maxWidth: "lg",
//   minHeight: "100vh",
  
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   padding: theme.spacing(4),
//   marginTop: theme.spacing(15),
//   // background: "linear-gradient(135deg, #1c2331 0%, #2e3b55 50%, #455a64 100%)",
//   // borderRadius: 15,
//   // boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
//   [theme.breakpoints.down("sm")]: {
//     padding: theme.spacing(2),
//     marginTop: theme.spacing(8),
//   },
// }));

// const GlassBox = styled(Box)(({ theme }) => ({
//   textAlign: "center",
//   padding: theme.spacing(5),
//   background: "rgba(255, 255, 255, 0.15)",
//   backdropFilter: "blur(10px)",
//   borderRadius: 15,
//   boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 12px 35px rgba(0, 0, 0, 0.3)",
//   },
//   [theme.breakpoints.down("sm")]: {
//     padding: theme.spacing(3),
//   },
// }));

// const ModernButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(3),
//   padding: theme.spacing(1.5, 6),
//   borderRadius: 30,
//   textTransform: "none",
//   fontWeight: "bold",
//   fontSize: "1.2rem",
//   background: "linear-gradient(90deg, #4a90e2 0%, #50bfa5 100%)",
//   color: "white",
//   boxShadow: "0 4px 20px rgba(74, 144, 226, 0.4)",
//   transition: "transform 0.2s ease, background 0.3s ease",
//   "&:hover": {
//     background: "linear-gradient(90deg, #357ab7 0%, #3ea98f 100%)",
//     transform: "scale(1.05)",
//     boxShadow: "0 6px 25px rgba(74, 144, 226, 0.6)",
//   },
//   [theme.breakpoints.down("sm")]: {
//     padding: theme.spacing(1, 4),
//     fontSize: "1rem",
//   },
// }));

// const HomePage = () => {
//   return (
//     <StyledContainer>
//       <GlassBox>
//         <Typography
//           variant="h3"
//           component="h1"
//           gutterBottom
//           sx={{
//             color: "#E3F2FD",
//             fontWeight: "bold",
//             letterSpacing: 1.5,
//             [theme => theme.breakpoints.down("sm")]: {
//               fontSize: "2rem",
//             },
//           }}
//         >
//           Welcome to ML Frontend
//         </Typography>
//         <Typography
//           variant="h6"
//           paragraph
//           sx={{
//             color: "#BBDEFB",
//             maxWidth: 600,
//             margin: "0 auto",
//             [theme => theme.breakpoints.down("sm")]: {
//               fontSize: "1rem",
//             },
//           }}
//         >
//           A powerful platform for managing and visualizing machine learning models and data.
//         </Typography>
//         <ModernButton component={Link} to="/check">
//           Get Started
//         </ModernButton>
//       </GlassBox>
//     </StyledContainer>
//   );
// };

// export default HomePage;
// import React from "react";
// import { Container, Typography, Box, Button } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { Link } from "react-router-dom";
// import PkrNote from "../assets/pakistani-rupees.jpg";

// const FullWidthContainer = styled(Container)(({ theme }) => ({
//   width: "100%",
//   minHeight: "100vh",
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   alignItems: "center",
//   background: "linear-gradient(135deg, #1a1b41 0%, #2e3b55 100%)",
// }));

// const ContentWrapper = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   width: "100%",
//   padding: theme.spacing(4, 8),
//   maxWidth: "1600px",
//   margin: "0 auto",
//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column-reverse",
//     padding: theme.spacing(3, 4),
//   },
//   [theme.breakpoints.down("sm")]: {
//     padding: theme.spacing(2),
//   },
// }));

// const TextContainer = styled(Box)(({ theme }) => ({
//   flex: "0 0 50%",
//   paddingRight: theme.spacing(4),
//   [theme.breakpoints.down("md")]: {
//     flex: "100%",
//     paddingRight: 0,
//     textAlign: "center",
//     marginTop: theme.spacing(3),
//   },
// }));

// const ImageContainer = styled(Box)(({ theme }) => ({
//   flex: "0 0 50%",
//   display: "flex",
//   justifyContent: "flex-end",
//   [theme.breakpoints.down("md")]: {
//     flex: "100%",
//     justifyContent: "center",
//     marginBottom: theme.spacing(3),
//   },
// }));

// const StyledImage = styled("img")(({ theme }) => ({
//   maxWidth: "100%",
//   height: "auto",
//   borderRadius: 15,
//   boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
//   transition: "transform 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.03)",
//   },
//   [theme.breakpoints.down("md")]: {
//     maxWidth: "70%",
//   },
//   [theme.breakpoints.down("sm")]: {
//     maxWidth: "90%",
//   },
// }));

// const ModernButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(3),
//   padding: theme.spacing(1.5, 6),
//   borderRadius: 50,
//   textTransform: "none",
//   fontWeight: "bold",
//   fontSize: "1.1rem",
//   background: "linear-gradient(90deg, #4a90e2 0%, #63b3ed 100%)",
//   color: "white",
//   boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     background: "linear-gradient(90deg, #357ab7 0%, #4299e1 100%)",
//     transform: "translateY(-2px)",
//     boxShadow: "0 6px 20px rgba(74, 144, 226, 0.6)",
//   },
//   [theme.breakpoints.down("sm")]: {
//     padding: theme.spacing(1, 4),
//     fontSize: "1rem",
//   },
// }));

// const HomePage = () => {
//   return (
//     <FullWidthContainer disableGutters>
//       <ContentWrapper>
//         <TextContainer>
//           <Typography
//             variant="h2"
//             component="h1"
//             sx={{
//               color: "#ffffff",
//               fontWeight: 700,
//               letterSpacing: 1,
//               lineHeight: 1.2,
//               [theme => theme.breakpoints.down("md")]: {
//                 fontSize: "2.5rem",
//               },
//               [theme => theme.breakpoints.down("sm")]: {
//                 fontSize: "1.8rem",
//               },
//             }}
//           >
//             Welcome to ML Frontend
//           </Typography>
//           <Typography
//             variant="h5"
//             sx={{
//               color: "#e2e8f0",
//               marginTop: theme => theme.spacing(2),
//               maxWidth: "500px",
//               lineHeight: 1.6,
//               [theme => theme.breakpoints.down("md")]: {
//                 margin: "0 auto",
//                 marginTop: theme => theme.spacing(2),
//               },
//               [theme => theme.breakpoints.down("sm")]: {
//                 fontSize: "1.1rem",
//               },
//             }}
//           >
//             A powerful platform for managing and visualizing machine learning models and data.
//           </Typography>
//           <ModernButton component={Link} to="/check">
//             Get Started
//           </ModernButton>
//         </TextContainer>
//         <ImageContainer>
//           <StyledImage
//             src={PkrNote} // Replace with your actual image URL
//             alt="Machine Learning Visualization"
//           />
//         </ImageContainer>
//       </ContentWrapper>
//     </FullWidthContainer>
//   );
// };

// export default HomePage;

// import React from "react";
// import { Container, Typography, Box, Button } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { Link } from "react-router-dom";
// import PkrNote from "../assets/pakistani-rupees.jpg";

// const FullWidthContainer = styled(Container)(({ theme }) => ({
//   width: "100vw", // Use viewport width for true full-width
//   minHeight: "100vh",
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   alignItems: "center",
//   background: "linear-gradient(135deg, #1a1b41 0%, #2e3b55 100%)",
//   position: "relative", // Ensure it respects its own boundaries
// }));

// const ContentWrapper = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   width: "100%",
//   padding: theme.spacing(4, 8),
//   maxWidth: "1600px",
//   margin: "0 auto",
//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column", // Change to "column" for text-first on mobile
//     padding: theme.spacing(3, 4),
//   },
//   [theme.breakpoints.down("sm")]: {
//     padding: theme.spacing(2),
//   },
// }));

// const TextContainer = styled(Box)(({ theme }) => ({
//   flex: "0 0 50%",
//   paddingRight: theme.spacing(4),
//   [theme.breakpoints.down("md")]: {
//     flex: "100%",
//     paddingRight: 0,
//     textAlign: "center",
//     marginTop: theme.spacing(3),
//   },
// }));

// const ImageContainer = styled(Box)(({ theme }) => ({
//   flex: "0 0 50%",
//   display: "flex",
//   justifyContent: "flex-end",
//   [theme.breakpoints.down("md")]: {
//     flex: "100%",
//     justifyContent: "center",
//     marginBottom: theme.spacing(3),
//   },
// }));

// const StyledImage = styled("img")(({ theme }) => ({
//   maxWidth: "100%",
//   height: "auto",
//   borderRadius: 15,
//   boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
//   transition: "transform 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.03)",
//   },
//   [theme.breakpoints.down("md")]: {
//     maxWidth: "70%",
//   },
//   [theme.breakpoints.down("sm")]: {
//     maxWidth: "90%",
//   },
// }));

// const ModernButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(3),
//   padding: theme.spacing(1.5, 6),
//   borderRadius: 50,
//   textTransform: "none",
//   fontWeight: "bold",
//   fontSize: "1.1rem",
//   background: "linear-gradient(90deg, #4a90e2 0%, #63b3ed 100%)",
//   color: "white",
//   boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     background: "linear-gradient(90deg, #357ab7 0%, #4299e1 100%)",
//     transform: "translateY(-2px)",
//     boxShadow: "0 6px 20px rgba(74, 144, 226, 0.6)",
//   },
//   [theme.breakpoints.down("sm")]: {
//     padding: theme.spacing(1, 4),
//     fontSize: "1rem",
//   },
// }));

// const HomePage = () => {
//   return (
//     <FullWidthContainer disableGutters>
//       <ContentWrapper>
//         <TextContainer>
//           <Typography
//             variant="h2"
//             component="h1"
//             sx={{
//               color: "#ffffff",
//               fontWeight: 700,
//               letterSpacing: 1,
//               lineHeight: 1.2,
//               [theme => theme.breakpoints.down("md")]: {
//                 fontSize: "2.5rem",
//               },
//               [theme => theme.breakpoints.down("sm")]: {
//                 fontSize: "1.8rem",
//               },
//             }}
//           >
//             Welcome to ML Frontend
//           </Typography>
//           <Typography
//             variant="h5"
//             sx={{
//               color: "#e2e8f0",
//               marginTop: theme => theme.spacing(2),
//               maxWidth: "500px",
//               lineHeight: 1.6,
//               [theme => theme.breakpoints.down("md")]: {
//                 margin: "0 auto",
//                 marginTop: theme => theme.spacing(2),
//               },
//               [theme => theme.breakpoints.down("sm")]: {
//                 fontSize: "1.1rem",
//               },
//             }}
//           >
//             A powerful platform for managing and visualizing machine learning models and data.
//           </Typography>
//           <ModernButton component={Link} to="/check">
//             Get Started
//           </ModernButton>
//         </TextContainer>
//         <ImageContainer>
//           <StyledImage src={PkrNote} alt="Machine Learning Visualization" />
//         </ImageContainer>
//       </ContentWrapper>
//     </FullWidthContainer>
//   );
// };

// export default HomePage;

import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PkrNote from "../assets/pakistani-rupees.jpg";

const FullWidthContainer = styled(Container)(({ theme }) => ({
  width: "100vw", // Full viewport width
  minHeight: "100vh",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(135deg, #1a1b41 0%, #2e3b55 100%)",
  position: "relative",
  overflowX: "hidden", // Prevent horizontal scroll issues
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%", // Full width of the container
  padding: theme.spacing(4, 8),
  // Removed maxWidth: "1600px" to allow full stretch; re-add if you want a content cap
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: theme.spacing(3, 4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  flex: "0 0 50%",
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flex: "100%",
    paddingRight: 0,
    textAlign: "center",
    marginTop: theme.spacing(3),
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: "0 0 50%",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    flex: "100%",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  borderRadius: 15,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

const ModernButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 6),
  borderRadius: 50,
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "1.1rem",
  background: "linear-gradient(90deg, #4a90e2 0%, #63b3ed 100%)",
  color: "white",
  boxShadow: "0 4px 15px rgba(74, 144, 226, 0.4)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(90deg, #357ab7 0%, #4299e1 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(74, 144, 226, 0.6)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 4),
    fontSize: "1rem",
  },
}));

const HomePage = () => {
  return (
    <FullWidthContainer disableGutters maxWidth={false}>
      <ContentWrapper>
        <TextContainer>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "#ffffff",
              fontWeight: 700,
              letterSpacing: 1,
              lineHeight: 1.2,
              [theme => theme.breakpoints.down("md")]: {
                fontSize: "2.5rem",
              },
              [theme => theme.breakpoints.down("sm")]: {
                fontSize: "1.8rem",
              },
            }}
          >
            Welcome to ML Frontend
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#e2e8f0",
              marginTop: theme => theme.spacing(2),
              maxWidth: "500px",
              lineHeight: 1.6,
              [theme => theme.breakpoints.down("md")]: {
                margin: "0 auto",
                marginTop: theme => theme.spacing(2),
              },
              [theme => theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            A powerful platform for managing and visualizing machine learning models and data.
          </Typography>
          <ModernButton component={Link} to="/check">
            Get Started
          </ModernButton>
        </TextContainer>
        <ImageContainer>
          <StyledImage src={PkrNote} alt="Machine Learning Visualization" />
        </ImageContainer>
      </ContentWrapper>
    </FullWidthContainer>
  );
};

export default HomePage;