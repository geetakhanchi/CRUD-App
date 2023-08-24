import styled from "@emotion/styled"
import { Button, FormControl, FormGroup, Typography, } from "@mui/material"
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { getUser, editUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

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

const EditUser = () => {
    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserData();
    },)

    const getUserData = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValuechange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    const addUserDetails = async() => {
            await editUser(user);
            navigate("/all");
        }
    return (
        <Container>
            <Typography variant="h4">Edit Users</Typography>
            <FormControl>
                <TextField onChange={(e) => onValuechange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <TextField onChange={(e) => onValuechange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
               <TextField onChange={(e) => onValuechange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <TextField onChange={(e) => onValuechange(e)} name="phone" value={user.phone} />
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetails()} variant="contained">Edit User</Button>
            </FormControl>
        </Container>
    )
}


export default EditUser;