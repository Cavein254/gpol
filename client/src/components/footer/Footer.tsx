import { Box, Typography } from '@mui/material';
import './styles.scss';

const Footer = () => {
  return (
    <Box className="footer-container">
      <Box className="footer-links">
        <Typography
          sx={{
            fontFamily: 'Volkhov',
            fontSize: '2rem',
            fontWeight: '900',
          }}
        >
          GPOL
        </Typography>
        <Typography variant="caption">Your Faithful Career Patner</Typography>
      </Box>
      <Box className="footer-links">
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '900',
            fontSize: '1.2rem',
          }}
        >
          Company
        </Typography>
        <Typography variant="caption">About</Typography>
        <Typography variant="caption">Career</Typography>
      </Box>
      <Box className="footer-links">
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '900',
            fontSize: '1.2rem',
          }}
        >
          Contact
        </Typography>
        <Typography variant="caption">Help/FAQs</Typography>
        <Typography variant="caption">Press</Typography>
      </Box>
      <Box>All rights reserved.</Box>
    </Box>
  );
};

export default Footer;
