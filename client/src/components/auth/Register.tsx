import { Box } from '@mui/material';
import Logo from '../../assets/main.svg';

const Register = () => {
  return (
    <Box>
      <Box>
        <img src={Logo} alt="logo" />
      </Box>
      <Box>
        <Typography variant="h4">Create Account</Typography>
      </Box>
    </Box>
  );
};

export default Register;
