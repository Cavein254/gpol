import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <Box>
      <Box className="nav" component="nav">
        <Box className="logo">
          <Typography variant="h4">GPOL</Typography>
        </Box>
        <Box className="mid-nav">
          <Link to="/">Careers</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Button variant="text">
            <Link to="/create">Post a Job</Link>
          </Button>
        </Box>
        <Box>
          <Button variant="outlined" sx={{ marginRight: '10px' }}>
            <Link to="/auth/register">Sign Up</Link>
          </Button>
          <Button variant="contained">
            <Link to="/auth/login">Login</Link>
          </Button>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Header;
