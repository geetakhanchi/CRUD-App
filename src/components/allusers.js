import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import { getAllUsers, deleteUser } from "../service/api"
import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"


const StyledTable = styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
    `

const THead = styled(TableRow)`
    background-color: #A9A9A9;
    & > th {
        font-size:20px;
    }
    `    
const TBody = styled(TableRow)`
    & > td {
        font-size:19px;

    }
    `     

const AllUsers = () => {
    const [users, setUsers] = useState([])
    
        useEffect(() => {
            getusersDetails();
        }, [])
    const getusersDetails = async () => {
        let response = await getAllUsers();
        setUsers(response.data)
    }        

    const deleteUserdata = async (id) => {
        await deleteUser(id)
        getusersDetails();
        
    }        
    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>

                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:15}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained" onClick={() => deleteUserdata(user.id)}>Delete</Button>
                            </TableCell>
                        </TBody>    
                    ))        
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers