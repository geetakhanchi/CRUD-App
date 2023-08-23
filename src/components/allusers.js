import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { getAllUsers } from "../service/api"
import { useState, useEffect } from "react"

const AllUsers = () => {
    const [users, setUsers] = useState([])
    
        useEffect(() => {
            getAllUsers().then(res => {
                setUsers(res.data)
            })
        }, [])
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>    
                    ))        
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers