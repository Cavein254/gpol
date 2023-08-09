import { Box, Typography } from '@mui/material';
import './styles.scss';
const Categories = () => {
  return (
    <Box>
      <Box className="category">
        <Typography variant="h4" className="category-small">
          Category
        </Typography>
        <Typography variant="h4">We Offer Best Services</Typography>
      </Box>
    </Box>
  );
};

export default Categories;
