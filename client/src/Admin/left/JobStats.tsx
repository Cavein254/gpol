import { Box, Typography } from '@mui/material';
import { JobStatsData } from './data';
const JobStats = () => {
  const jobs = JobStatsData.map((job) => {
    return (
      <Box className="jobstats-container" key={job.id}>
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
              {job.text}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 900,
                fontSize: '2.5rem',
              }}
            >
              {job.stats}
            </Typography>
          </Box>
          <Box className="item-left-image">
            <img src={job.icon} alt="jobs" />
          </Box>
        </Box>
      </Box>
    );
  });
  return { jobs };
};

export default JobStats;
