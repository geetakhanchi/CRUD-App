import styled from "@emotion/styled"
import { Button, FormControl, FormGroup, Typography, } from "@mui/material"
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
    width: 40%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top:20px;
    }
    
`
const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
}

const AddUser = () => {
    const [user, setUser] = useState(initialValues);

    const onValuechange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    const addUserDetails = async() => {
            await addUser(user);
        }
    return (
        <Container>
            <Typography variant="h4">Add Users</Typography>
            <FormControl>
                <TextField onChange={(e) => onValuechange(e)} name="name" label="Name" variant="standard" />
            </FormControl>
            <FormControl>
                <TextField onChange={(e) => onValuechange(e)} name="username" label="Username" variant="standard" />
            </FormControl>
            <FormControl>
               <TextField onChange={(e) => onValuechange(e)} name="email" label="Email" variant="standard" />
            </FormControl>
            <FormControl>
                <TextField onChange={(e) => onValuechange(e)} name="phone" label="Phone" variant="standard" />
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetails()} variant="contained">Add User</Button>
            </FormControl>
        </Container>
    )
}


export default AddUser;