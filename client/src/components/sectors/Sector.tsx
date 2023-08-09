import { Box, Typography } from '@mui/material';
import Item from './Item';
import { sectorItems } from './data';
import './styles.scss';

const Sector = () => {
  const items = sectorItems.map((sector) => (
    <Item key={sector.id} sector={sector} />
  ));
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
      >
        {items}
      </Box>
    </Box>
  );
};

export default Sector;
