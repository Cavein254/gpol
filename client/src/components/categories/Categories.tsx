import { Box, Typography } from '@mui/material';
import Services from '../services/Services';
import './styles.scss';
const Categories = () => {
  return (
    <Box>
      <Box
        className="category"
        sx={{
          fontFamily: 'Volkhov',
          color: '#181e4b',
          fontWeight: '900',
        }}
      >
        <Typography
          variant="h4"
          className="category-small"
          sx={{
            fontFamily: 'Volkhov',
            color: '#181e4b',
            fontWeight: '900',
            fontSize: '1.2rem',
          }}
        >
          Category
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Volkhov',
            color: '#181e4b',
            fontWeight: '900',
            fontSize: '2.2rem',
          }}
        >
          We Offer Best Services
        </Typography>
      </Box>
      <Box>
        <Services />
      </Box>
    </Box>
  );
};

export default Categories;
