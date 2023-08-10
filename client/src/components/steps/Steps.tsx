import { Box, Typography } from '@mui/material';
import { stepData } from './data';
const Steps = () => {
  const step = stepData.map((item) => {
    return (
      <Box key={item.id}>
        <Box>
          <item.icon />
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
      <Box>{step}</Box>
    </Box>
  );
};

export default Steps;
