import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MakeReview from '../MakeReview/MakeReview';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const {admin, logOut} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
        <NavLink style={{textDecoration: 'none',}} to='/explore'>
            <Button color="inherit">add more</Button>
        </NavLink>
        <br />
        <NavLink style={{textDecoration: 'none',}} to='/'>
            <Button color="inherit">go to home</Button>
        </NavLink>
      <Divider />
      {
          admin ? <Box>
            <Link style={{textDecoration: 'none',}} to={`${url}/makeAdmin`}>Make Admin</Link>
            <br/>
            <Link style={{textDecoration: 'none',}} to={`${url}/manageOrder`}>Manage all Orders</Link>
            <br/>
            <Link style={{textDecoration: 'none',}} to={`${url}/addProduct`}>Add a Product</Link>
            <br/>
            <Link style={{textDecoration: 'none',}} to={`${url}/manageProduct`}>Manage Product</Link>
            <br/>
            <Button onClick={logOut} variant="text">Logout</Button>
          </Box>
          :
          <Box>
            <Link style={{textDecoration: 'none',}} to={`${url}`}>Dashboard</Link>
            <br/>
            <Link style={{textDecoration: 'none',}} to={`${url}/myOrders`}>My Orders</Link>
            <br/>
            <Link style={{textDecoration: 'none',}} to={`${url}/review`}>Make Review</Link>
            <br/>
            <Link style={{textDecoration: 'none',}} to={`${url}/pay`}>Pay</Link>
            <br/>
            <Button onClick={logOut} variant="text">Logout</Button>
          </Box>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/review`}>
            <MakeReview></MakeReview>
        </Route>
        <Route path={`${path}/pay`}>
            <Payment></Payment>
        </Route>
        <Route path={`${path}/manageOrder`}>
            <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
        </Route>
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
