import { Box } from '@mui/material';
import AdminHeader from './AdminHeader';
import Left from './Left';
import { adminData } from './data';
import './styles.scss';

const Admin = () => {
  const icons = adminData.map((data) => {
    return (
      <Box key={data.id}>
        <Box className="icon"></Box>
        <Box className="target">{data.name}</Box>
      </Box>
    );
  });
  return (
    <Box className="adminContainer">
      <Box className="sidebar">
        <>{icons}</>
      </Box>
      <Box className="admin-wrapper">
        <AdminHeader />
        <Box className="dashboard-main">
          <Box className="admin-left">
            <Left />
          </Box>
          <Box className="admin-right">Right</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
