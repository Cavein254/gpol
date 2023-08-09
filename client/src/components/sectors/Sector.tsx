import { Box, Typography } from '@mui/material';
import Item from './Item';
import './styles.scss';

const Sector = () => {
  return (
    <Box>
      <Box className="sector-text">
        <Typography variant="h4">Top Ranking</Typography>
        <Typography variant="h5">Top Ranking Professions</Typography>
      </Box>
      <Box
        sx={{
          margin: '1rem',
        }}
      >
        <Item />
      </Box>
    </Box>
  );
};

export default Sector;
