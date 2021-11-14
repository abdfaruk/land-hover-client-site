import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInUsingGoogle} = useAuth();


    const location = useLocation();
    const history = useHistory();


    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    }



    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant="h4" component="div" gutterBottom>
                Login
            </Typography>
            <form  sx={{mt:8}} onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width:'50%', m:1}}
                id="standard-basic" 
                label="Your Email" 
                name="email" 
                onBlur={handleOnChange}
                variant="standard" 
                />
                <br />
                <TextField 
                sx={{width:'50%', m:1}}
                id="standard-basic" 
                label="Your Email" 
                name="password"
                onBlur={handleOnChange}
                type="password"
                variant="standard" 
                />
                <br />
                <NavLink style={{textDecoration:'none'}} to="/register">
                    <Button variant="text">new user? please register</Button>
                </NavLink>
                {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">Congratulation! User Logged in successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
                <br />
                <Button sx={{width:'50%', m:1}} type="submit" variant="contained">Login</Button>
                <Button onClick={handleGoogleLogin} sx={{width: '50%', m:1}} variant="contained">Sign With Google</Button>
            </form>
        </Container>
    );
};

export default Login;