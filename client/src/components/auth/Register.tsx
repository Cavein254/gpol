import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Logo from '../../assets/main.svg';
import './styles.scss';

//TODO: Add validation
//TODO: Add

interface RegistrationDetail {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  idNo: string;
}

const Register = () => {
  const [details, setDetails] = useState<RegistrationDetail>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    idNo: '',
  });

  const error = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ details: details });
  };
  return (
    <Box className="container">
      <Box className="xs-container">
        <Box className="image">
          <img src={Logo} alt="logo" />
        </Box>
        <Box className="sx-formWrapper">
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
                <Typography variant="caption">Username</Typography>
                <TextField
                  id="username"
                  name="username"
                  type="text"
                  variant="outlined"
                  placeholder="Prefered username"
                  value={details.username}
                  onChange={(e) =>
                    setDetails({ ...details, username: e.target.value })
                  }
                  required
                />
              </FormControl>
              <Box>
                <FormControl>
                  <Typography variant="caption">Email Address</Typography>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email Address"
                    value={details.email}
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    required
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <Typography variant="caption">Password</Typography>
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Your Password"
                    value={details.password}
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                    required
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <Typography variant="caption">Confirm password</Typography>
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-Enter your Password"
                    value={details.confirmPassword}
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                </FormControl>
              </Box>
              <Box>
                <Box>
                  <Button variant="contained" onClick={handleSubmit}>
                    Register
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained">Sign In</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
