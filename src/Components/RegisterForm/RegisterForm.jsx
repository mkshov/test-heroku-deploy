import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/authContext';

const RegisterForm = () => {
    const {signUp, error} = useContext(authContext)
    const navigate = useNavigate()
    console.log(signUp);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleValues(){
        if(!email || !password){
            alert("заполните поля!")
            return
        }
        signUp(email,password, navigate)
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'70vh'}>
            <Typography variant="h4" component="h2">Register</Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '40%', margin: '10px'}} id="outlined-basic" label="Email" variant="outlined" />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '40%', margin: '10px'}}  id="outlined-basic" label="Password" type={"password"} variant="outlined" />
            {error ? (<Alert style={{marginBottom: '10px'}} severity="error">{error}</Alert>) : null}
            <Button  style={{ width: '40%', margin: '10px'}} variant="contained" onClick={handleValues}>Register</Button>
            <Typography variant="h6" component="h2">
                Already have an account?
                </Typography>
                <Typography onClick={() => navigate(`/login`)} variant="h6" color={"primary"} style={{cursor: 'pointer'}} component="h2">
                    Log in
                    </Typography>
        </Box>
    );
};

export default RegisterForm;