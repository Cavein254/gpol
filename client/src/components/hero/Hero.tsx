import { Box, Button, Typography } from '@mui/material';
import Work from '../../assets/work.png';
import './style.scss';

const Hero = () => {
  return (
    <Box className="hero-wrapper">
      <Box className="hero-left">
        <Box>
          <Typography
            variant="h4"
            className="hero-tagline"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '900',
              fontSize: '0.9rem',
            }}
          >
            Empowering Your Professional Journey
          </Typography>
          <Typography
            variant="h4"
            className="hero-title"
            sx={{
              paddingTop: '1.2rem',
              fontFamily: 'Volkhov',
              lineHeight: '0.95',
              fontWeight: '900',
              fontSize: '3.5rem',
            }}
          >
            Work and Find Joy Pursing your PASSION
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '1rem',
            }}
          >
            Are you ready to take your career to the next level? Look no further
            than <span>GPOL</span>, the leading destination for job seekers and
            employers to connect, explore, and excel. With our cutting-edge
            technology and user-centric approach, we've revolutionized the job
            search process, making it easier and more effective than ever
            before.
          </Typography>
        </Box>
        <Box className="btn-container">
          <Button variant="contained">Find Out More</Button>
        </Box>
      </Box>
      <Box className="hero-right">
        <img src={Work} alt="Working Enviroment" className="work" />
      </Box>
    </Box>
  );
};

export default Hero;
