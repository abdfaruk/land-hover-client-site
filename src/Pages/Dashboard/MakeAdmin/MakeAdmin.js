import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://mighty-ridge-44167.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
                setEmail('')
                setSuccess(true);
            }
        })



        e.preventDefault();
    }
    return (
        <div>
            <h2>Make me admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                sx={{width:'50%'}}
                label="Email" 
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
                <br /><br />
                <Button sx={{width:'50%'}} type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Congratulation! Made admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;