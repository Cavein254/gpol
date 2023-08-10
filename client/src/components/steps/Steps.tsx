import { Box, Typography } from '@mui/material';
const Steps = () => {
  return (
    <Box
      sx={{
        margin: '1rem',
      }}
    >
      <Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Volkhov',
              fontSize: '1.2rem',
              textTransform: 'uppercase',
              fontWeight: 900,
            }}
          >
            Easy and Fast
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: '2.2rem',
              fontFamily: 'Volkhov',
              textTransform: 'uppercase',
              fontWeight: 900,
              color: '#181e4b',
            }}
          >
            Fast Track Your Career in 3 Easy Steps
          </Typography>
        </Box>
        <Box>
          <Box>
            <Box></Box>
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
                Browse
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: '200',
                  fontSize: '1rem',
                }}
              >
                Search the site on various opportunities that are available
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box></Box>
            <Box>
              <Typography variant="body2">Apply</Typography>
              <Typography variant="caption">
                Apply to the job opportunity that seem most convinient for you
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box></Box>
            <Box>
              <Typography variant="body2">Register</Typography>
              <Typography variant="caption">
                Click on the GET STARTED button to get access to the site
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Steps;
