import styled from '@emotion/styled';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/main.svg';
import { registerUser } from '../../features/auth/authActions';
import { RegistrationDetail } from '../../types';
import './styles.scss';

const StyledButton = styled(Button)`
  background-color: #483285;
`;

//TODO: Add validation
//TODO: Add toast for errors

const Register = () => {
  // const {loading,success,error,userInfo} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    id_no: '',
  };
  const [details, setDetails] = useState<RegistrationDetail>(initialState);
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.password !== details.confirmPassword) {
      setError('The passwords do not match!');
      return;
    }
    error.length === 0 && dispatch(registerUser(details));
    console.log({ 'user data': details });
  };
  return (
    <Box className="container">
      <Box
        className="xs-container"
        sx={{
          boxShadow: 3,
        }}
      >
        <Box>
          <img src={Logo} alt="logo" className="image" />
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
          {error && <Box>{error}</Box>}
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
                <Typography variant="body2">ID Number</Typography>
                <TextField
                  id="idno"
                  name="username"
                  type="number"
                  variant="outlined"
                  placeholder="Enter your ID No."
                  value={details.id_no}
                  onChange={(e) =>
                    setDetails({ ...details, id_no: e.target.value })
                  }
                  required
                />
              </FormControl>
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
                  <StyledButton
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                      marginTop: '2rem',
                      marginBottom: '1rem',
                    }}
                  >
                    Login
                  </StyledButton>
                </FormControl>
                <Box>
                  <Typography variant="body2">
                    You don't own an account? <span>Register</span>
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
