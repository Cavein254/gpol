import { Box, Typography } from '@mui/material';
import './styles.scss';

const Footer = () => {
  return (
    <Box className="footer-container">
      <Box>
        <Typography variant="h4">GPOL</Typography>
        <Typography variant="caption">Your Faithful Career Patner</Typography>
      </Box>
      <Box>
        <Typography variant="h4">Company</Typography>
        <Typography variant="caption">About</Typography>
        <Typography variant="caption">Career</Typography>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Footer;
