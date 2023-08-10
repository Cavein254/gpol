import { Box, Button, Typography } from '@mui/material';
import './styles.scss';

const Header = () => {
  return (
    <Box>
      <Box className="nav" component="nav">
        <Box className="logo">
          <Typography variant="h4">GPOL</Typography>
        </Box>
        <Box className="mid-nav">
          <Typography variant="caption">Careers</Typography>
          <Typography variant="caption">About Us</Typography>
          <Typography variant="caption">Contact Us</Typography>
          <Button variant="text">Post a Job</Button>
        </Box>
        <Box>
          <Button variant="outlined" sx={{ marginRight: '10px' }}>
            Sign Up
          </Button>
          <Button variant="contained">Login</Button>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Header;
