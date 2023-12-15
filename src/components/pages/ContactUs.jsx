// ContactUs.js
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ContactUs = () => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 4,
        border: "1px solid #ccc",
        borderRadius: 8,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
        Fill out the form below:
      </Typography>
      {/* Replace 'YOUR_EMBED_CODE' with the actual embed code you copied */}
      <iframe
        title="Google Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfpUyyGVVX1BacVXp9_xUnjnwg5gzoQu14WBL4XzHroUIXLaw/viewform?embedded=true"
        width="100%"
        height="600px"
      >
        Loading...
      </iframe>
    </Box>
  );
};

export default ContactUs;
