import { Box, Button, Typography } from '@mui/material';

const Left = () => {
  return (
    <Box>
      <Box className="main-header">
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Poppins',
              fontSize: '1.4rem',
              fontWeight: '900',
            }}
          >
            Good Morning, <span className="username">User !</span>
          </Typography>
        </Box>
        <Box>
          <Button variant="contained">+ Add New Task</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Left;
