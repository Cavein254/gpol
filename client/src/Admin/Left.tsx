import { Box, Typography } from "@mui/material";

const Left = () => {
  return <Box>
    <Box>
        <Box>
            <Typography variant="h2" sx={{
                fontFamily:'Poppins',
                fontSize:'1.4rem',
                fontWeight:'900'
            }}>
                Good Morning, <span className='username'>User !</span> 
            </Typography>
        </Box>
        <Box></Box>
    </Box>
  </Box>;
};

export default Left;
