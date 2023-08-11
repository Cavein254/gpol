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
          <Link to="/list">
            <Typography variant="body1">Careers</Typography>
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/create">
            <Button variant="text">Post a Job</Button>
          </Link>
        </Box>
        <Box>
          <Link to="/auth/register">
            <Button variant="outlined" sx={{ marginRight: '10px' }}>
              Sign Up
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="contained">Login</Button>
          </Link>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Header;
