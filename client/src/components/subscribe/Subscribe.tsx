import { Box, Button, TextField, Typography } from '@mui/material';
import './styles.scss';

const Subscribe = () => {
  return (
    <Box className="subcribe-container">
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: '#5E6282',
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '1.8rem',
            textAlign: 'center',
          }}
        >
          Subscribe to get information, latest news and other interesting offers
          about GPOL
        </Typography>
      </Box>
      <Box className="subscribe-btn">
        <TextField variant="outlined" />
        <Button variant="contained" size="large">
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default Subscribe;
