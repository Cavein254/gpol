import { Box } from '@mui/material';
import { adminData } from './data';

const Admin = () => {
  const icons = adminData.map((data) => {
    return (
      <Box>
        <Box className="icon"></Box>
        <Box className="target">{data.name}</Box>
      </Box>
    );
  });
  return (
    <Box>
      <Box className="sidebar">
        <>{icons}</>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Admin;
