import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


const Tabs = styled(NavLink)`
 font-size:20px;
 margin-right:20px;
 color: inherit;
 text-decoration: none;`

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* <Tabs to="/">Home</Tabs> */}
                <Tabs to="all">All Users</Tabs>
                <Tabs to="add">Add User</Tabs>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar