import styled from '@emotion/styled';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../App/store';
import Logo from '../../assets/main.svg';
import { registration } from '../../features/auth/registerSlice';
import { RegistrationDetail } from '../../types';
import './styles.scss';

const StyledButton = styled(Button)`
  background-color: #483285;
`;

//TODO: Add validation
//TODO: Add

const Register = () => {
  const register = useSelector((state: RootState) => state.register);
  const dispatch = useDispatch();
  const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    idNo: '',
  };
  const [details, setDetails] = useState<RegistrationDetail>(initialState);

  const error = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.password !== details.confirmPassword) {
      error.push('The passwords do not match!');
      return;
    }
    error.length === 0 && dispatch(registration());
    setDetails(initialState);
  };
  return (
    <Box className="container">
      <Box className="xs-container">
        <Box className="image">
          <img src={Logo} alt="logo" />
        </Box>
        <Box className="sx-formWrapper">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Box
              component="form"
              sx={{
                margin: '1rem',
              }}
            >
              <FormControl fullWidth>
                <Typography variant="body2">Username</Typography>
                <TextField
                  id="username"
                  name="username"
                  type="text"
                  variant="outlined"
                  placeholder="Prefered Username"
                  value={details.username}
                  onChange={(e) =>
                    setDetails({ ...details, username: e.target.value })
                  }
                  required
                />
              </FormControl>
              <FormControl fullWidth>
                <Typography variant="body2">ID Number</Typography>
                <TextField
                  id="idno"
                  name="username"
                  type="number"
                  variant="outlined"
                  placeholder="Enter your ID No."
                  value={details.idNo}
                  onChange={(e) =>
                    setDetails({ ...details, idNo: e.target.value })
                  }
                  required
                />
              </FormControl>
              <Box>
                <FormControl fullWidth>
                  <Typography variant="body2">Email Address</Typography>
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
                <FormControl fullWidth>
                  <Typography variant="body2">Password</Typography>
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
                <FormControl fullWidth>
                  <Typography variant="body2">Confirm password</Typography>
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
                <FormControl fullWidth>
                  <StyledButton
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                      marginTop: '2rem',
                      marginBottom: '1rem',
                    }}
                  >
                    Register
                  </StyledButton>
                </FormControl>
                <Box>
                  <Typography variant="body2">
                    Already have an account? <span>Login</span>
                  </Typography>
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
