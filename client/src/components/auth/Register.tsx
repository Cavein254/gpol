import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import Logo from '../../assets/main.svg';
import './styles.scss';

const Register = () => {
  return (
    <Box className="container">
      <Box className="xs-container">
        <Box>
          <img src={Logo} alt="logo" />
        </Box>
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: '900',
              }}
            >
              Create an Account
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: '400',
              }}
            >
              Create an account to get started.
            </Typography>
          </Box>
          <Box>
            <Box component="form">
              <FormControl>
                <Typography variant="h6">Username</Typography>
                <TextField
                  id="username"
                  name="username"
                  type="text"
                  variant="outlined"
                  placeholder="Prefered username"
                  required
                />
              </FormControl>
              <Box>
                <FormControl>
                  <Typography variant="h6">Email Address</Typography>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email Address"
                    required
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <Typography variant="h6">Password</Typography>
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Your Password"
                    required
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <Typography variant="h6">Confirm password</Typography>
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-Enter your Password"
                    required
                  />
                </FormControl>
              </Box>
              <Box>
                <Button variant="contained">Register</Button>
              </Box>
              <Box>
                <Button variant="contained">Sign In</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
