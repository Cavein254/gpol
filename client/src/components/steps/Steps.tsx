import { Box, Typography } from '@mui/material';
import { stepData } from './data';
import './styles.scss';
const Steps = () => {
  const step = stepData.map((item) => {
    return (
      <Box key={item.id} className="step-container">
        <Box>
          <item.icon className="step-icon" />
        </Box>
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '900',
              fontSize: '1rem',
              color: '#5E6282',
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '200',
              fontSize: '1rem',
            }}
          >
            {item.subTitle}
          </Typography>
        </Box>
      </Box>
    );
  });
  return (
    <Box
      sx={{
        margin: '1rem',
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '900',
            fontSize: '0.9rem',
            color: '#df6951',
          }}
        >
          Easy and fast
        </Typography>
        <Typography
          variant="h5"
          sx={{
            paddingTop: '1.2rem',
            fontFamily: 'Volkhov',
            lineHeight: '0.95',
            fontWeight: '900',
            fontSize: '3.5rem',
            color: '#181e4b',
          }}
        >
          Jump Start your next Career in 3 easy steps
        </Typography>
      </Box>
      <Box>{step}</Box>
    </Box>
  );
};

export default Steps;
