import CampaignIcon from '@mui/icons-material/Campaign';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import './styles.scss';

const card = (
  <React.Fragment>
    <CardContent>
      <CampaignIcon />
      <Typography variant="h4">Career Advice</Typography>
      <Typography variant="caption">
        As part of our commitment to helping you succeed, we proudly offer
        personalized career advice. Our team of experienced professionals is
        dedicated to assisting you at every stage of your career journey.
        Whether you're a recent graduate entering the job market or an
        established professional seeking new horizons, our career advice is
        tailored to your unique needs.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Services() {
  return (
    <Box className="card-wrapper">
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
