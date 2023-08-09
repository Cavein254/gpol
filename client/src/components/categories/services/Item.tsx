import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import './styles.scss';

export default function Item({ service }) {
  return (
    <Card variant="outlined" className="card-wrapper">
      <React.Fragment>
        <CardContent className="card-content">
          <Box>
            <service.icon
              sx={{
                fontSize: '4rem',
                color: '#df6951',
              }}
            />
          </Box>
          <Typography
            variant="h4"
            component="div"
            sx={{
              textAlign: 'center',
              color: '#181e4b',
              fontFamily: 'Poppins',
            }}
          >
            {service.title}
          </Typography>
          <Typography variant="caption" component="div">
            {service.description}
          </Typography>
        </CardContent>
      </React.Fragment>
    </Card>
  );
}
