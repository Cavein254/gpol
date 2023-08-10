import { Box, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Item({ sector }) {
  return (
    <Card
      className="item-wrapper"
      sx={{ marginBottom: '1rem', color: '#181e4b' }}
    >
      <CardMedia sx={{ height: 140 }} image={sector.src} title={sector.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {sector.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {sector.description}
        </Typography>
        <Box className="rating-wrapper">
          <Rating name="read-only" value={sector.rating} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
}
