import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2) {
            alert('Both password are not same')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant="h4" component="div" gutterBottom>
                Register
            </Typography>
            { !isLoading &&
                <form  sx={{mt:8}} onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width:'50%', m:1}}
                id="standard-basic" 
                label="Your Name" 
                type="text"
                name="name" 
                onBlur={handleOnBlur}
                variant="standard" 
                />
                <br />
                <TextField 
                sx={{width:'50%', m:1}}
                id="standard-basic" 
                label="Your Email" 
                type="email"
                name="email" 
                onBlur={handleOnBlur}
                variant="standard" 
                />
                <br />
                <TextField 
                sx={{width:'50%', m:1}}
                id="standard-basic" 
                label="Your Password" 
                name="password"
                onBlur={handleOnBlur}
                type="password"
                variant="standard" 
                />
                <br />
                <TextField 
                sx={{width:'50%', m:1}}
                id="standard-basic" 
                label="Retype Your Password" 
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                variant="standard" 
                />
                <br />
                <NavLink style={{textDecoration:'none'}} to="/login">
                    <Button variant="text">already registered? please login</Button>
                </NavLink>
                <br />
                <Button sx={{width:'50%', m:1}} type="submit" variant="contained">Register</Button>
            </form>
            }
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">Congratulation! User Registered successfully! Please Login.</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </Container>
    );
};

export default Register;