import { Box, Button, Typography } from '@mui/material';
import Work from '../../assets/work.png';
import './style.scss';

const Hero = () => {
  return (
    <Box className="hero-wrapper">
      <Box>
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
            BEST OPPORTUNITIES FROM AROUND THE GLOBE
          </Typography>
          <Typography
            variant="h4"
            className="hero-title"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '900',
              fontSize: '3.5rem',
            }}
          >
            Work and Find Joy Pursing your PASSION
          </Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            est voluptas, distinctio et ex nulla mollitia vitae labore beatae!
            Voluptate doloribus perspiciatis numquam commodi, facilis quod
            laborum repellat eveniet exercitationem!
          </Typography>
        </Box>
        <Box>
          <Button variant="contained">Find Out More</Button>
        </Box>
      </Box>
      <Box className="work-wrapper">
        <img src={Work} alt="Working Enviroment" className="work" />
      </Box>
    </Box>
  );
};

export default Hero;
