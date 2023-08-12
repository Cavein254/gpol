import { Box, Typography } from '@mui/material';
import ActiveJobs from '../../assets/activeJobs.svg';
const JobStats = () => {
  return (
    <Box className="jobstats-container">
      <Box
        className="job-item"
        sx={{
          boxShadow: 3,
        }}
      >
        <Box className="item-left">
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '1rem',
            }}
          >
            Active Jobs
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 900,
              fontSize: '2.5rem',
            }}
          >
            12
          </Typography>
        </Box>
        <Box className="item-left-image">
          <img src={ActiveJobs} alt="jobs" />
        </Box>
      </Box>
    </Box>
  );
};

export default JobStats;
