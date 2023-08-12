import { Box, Button, Typography } from '@mui/material';
import Task from '../assets/tasks.svg';

const Left = () => {
  return (
    <Box>
      <Box className="main-header">
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Poppins',
              fontSize: '1.8rem',
              fontWeight: '900',
            }}
          >
            Good Morning, <span className="username">User !</span>
          </Typography>
        </Box>
        <Box>
          <Button variant="contained">+ Add New Job</Button>
        </Box>
      </Box>
      <Box
        className="admin-task"
        sx={{
          boxShadow: 3,
        }}
      >
        <Box>
          <Box className="admin-task-text">
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '1.4rem',
                fontWeight: '900',
              }}
            >
              Today's Tasks
            </Typography>
            <Typography variant="body1">
              Check your daily tasks and schedule
            </Typography>
            <Button variant="contained">Check Today's Tasks</Button>
          </Box>
        </Box>
        <Box>
          <img src={Task} alt="tasks" className="admin-task-img" />
        </Box>
      </Box>
    </Box>
  );
};

export default Left;
