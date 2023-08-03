import { Box, Button, Typography } from '@mui/material';
import './styles.scss';

const Header = () => {
  return (
    <Box>
      <Box className="nav" component="nav">
        <Box>
          <Typography variant="h4">GPOL</Typography>
        </Box>
        <Box>
          <Typography variant="caption">Careers</Typography>
          <Typography variant="caption">About Us</Typography>
          <Typography variant="caption">Contact Us</Typography>
          <Button variant="text">Post a Job</Button>
        </Box>
        <Box>
          <Button variant="outlined">Sign Up</Button>
          <Button variant="contained">Login</Button>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Header;
