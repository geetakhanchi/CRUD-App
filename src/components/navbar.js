import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';


const Tabs = styled(Typography)`
 font-size:20px;
 margin-right:20px;`

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Tabs>Home</Tabs>
                <Tabs>All Users</Tabs>
                <Tabs>Add User</Tabs>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar