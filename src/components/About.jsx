import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Define a fade-in animation with upward movement
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Container for the About section with a dark background
const AboutContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#0d1117",
  color: "white",
  padding: theme.spacing(8, 0),
}));

// A reusable section component that applies the fadeIn animation with a custom delay
const Section = styled(Box, {
  shouldForwardProp: (prop) => prop !== "delay"
})(({ delay }) => ({
  animation: `${fadeIn} 0.8s ease forwards`,
  opacity: 0,
  animationDelay: delay,
  marginBottom: "2rem",
}));

// A styled Typography for section headings with a hover glow effect
const SectionTitle = styled(Typography)({
  color: "#00c8ff",
  cursor: "default",
  transition: "text-shadow 0.3s ease",
  "&:hover": {
    textShadow: "0px 0px 8px rgba(0,200,255,0.7)",
  },
});

// Animated Image component for the certificate with fadeIn animation
const AnimatedImage = styled("img")(({ delay = "0.5s" }) => ({
  animation: `${fadeIn} 0.8s ease forwards`,
  animationDelay: delay,
  opacity: 0,
  height: "21rem", // Set desired height
  width: "25%",   // Adjust width as needed
  marginTop: "1rem",
 
}));

function About() {
  return (
    <AboutContainer maxWidth="lg" id="About">
      {/* About Introduction */}
      <Section delay="0.2s">
        {/* Introduction content can go here */}
      </Section>

    

      {/* Education & Training */}
      <Section delay="0.4s">
        <SectionTitle variant="h5" gutterBottom>
          Education & Experience
        </SectionTitle>
        <Typography variant="body1">
          MCM DAV College New Kangra, BCA, 2020-2023 <br />
          Web Developer, Development Logics, June 2024 - October 2024 <br />
          Freelancing Web Development From December 2024 <br />
          IBM Full Stack Development Course 
        </Typography>
      </Section>

      <Divider light sx={{ backgroundColor: "#00c8ff", my: 2 }} />

      {/* Certificates Section */}
      <Section delay="1s">
        <SectionTitle variant="h5" gutterBottom>
          Certificates
        </SectionTitle>
        {/* Centering the certificate image */}
        <Box display="flex" justifyContent="center" alignItems="center" gap="2rem">
          <AnimatedImage
            src="/public/Certificate1.jpeg" // Replace with your certificate image URL
            alt="Certificate"
            delay="1.2s"
    
          />
            <AnimatedImage
            src="/public/images.png" // Replace with your certificate image URL
            alt="Certificate"
            delay="1.2s"
            
       
          />
        </Box>
      </Section>
    </AboutContainer>
  );
}

export default About;
