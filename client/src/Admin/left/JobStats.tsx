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
                fontSize: '0.8rem',
              }}
            >
              {job.text}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 900,
                fontSize: '1.4rem',
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
  return <Box className="jobs-wrapper">{jobs}</Box>;
};

export default JobStats;
