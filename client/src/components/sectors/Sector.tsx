import { Box, Typography } from '@mui/material';
import { sectorItems } from './data';
import './styles.scss';

const Sector = () => {
  console.log(sectorItems);
  return (
    <Box>
      <Box className="sector-text">
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Volkhov',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            fontWeight: 900,
          }}
        >
          Top Ranking
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: '2.2rem',
            fontFamily: 'Volkhov',
            textTransform: 'uppercase',
            fontWeight: 900,
          }}
        >
          Top Ranking Professions
        </Typography>
      </Box>
      <Box
        sx={{
          margin: '1rem',
        }}
      ></Box>
    </Box>
  );
};

export default Sector;
