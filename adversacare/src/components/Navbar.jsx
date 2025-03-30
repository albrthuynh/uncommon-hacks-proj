import React, { useEffect, useState } from 'react';
import Logo from "../assets/Logo/adversaCareLogo.png";
import testLogo from "../assets/Logo/smallLogo.png";
import { Link } from "react-router-dom";
import LoginButtons from "./LoginButtons";
import { useLocation } from "react-router-dom";
import { IconButton, Menu, MenuItem, Avatar, Typography} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAuth0 } from "@auth0/auth0-react";

function NavigationBar() {
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const {pathname} = useLocation();
    const [auth, setAuth] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <header className = "flex flex-row h-16 justify-between bg-white shadow">
                {/* Logo */}
                <div className="ml-10 flex-shrink-0 align-middle content-center items-start">
                    <Link to="/" title="Akknoledge Careers" className="flex rounded">
                        <img
                        className="w-full h-12.5"
                        src={testLogo}
                        alt="AdversaCareLogo"
                        />
                    </Link>
                </div>

                <LoginButtons/>
                
                {pathname.includes('dashboard') && (
                    <div className='flex items-center'>
                        <div className=''>
                        {isAuthenticated && (
                            <div>
                                <h1>Hello there, {user.name}</h1>
                            </div>
                            )}
                        </div>
                        <div className='mr-10'>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                            {isAuthenticated && (
                                <Avatar alt="Remy Sharp" src={user.picture} />
                            )}
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    
                )}
            </header>
        </>
    )
};

export default NavigationBar;


