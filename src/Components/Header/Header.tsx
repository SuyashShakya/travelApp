import React from 'react';
import {AppBar, Toolbar, Typography, Box, IconButton} from '@material-ui/core';

import useStyles from './styles';
import {ReactComponent as DarkMode} from '../../assets/images/dark_mode.svg'
import {ReactComponent as LightMode} from '../../assets/images/light_mode.svg'
import {ContextWrapper} from '../../Context';
import SideBar from '../SideBar/SideBar';

const Header = () => {
    const classes = useStyles();
    const context = React.useContext(ContextWrapper);
     
    return (
        <AppBar position='static' className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6'>
                    Travel Companion
                </Typography>  
                <Box display='flex' flexDirection='row' alignItems='center'>
                    <SideBar />
                    {context?.isLightTheme ?
                        <IconButton onClick={() => context?.toggleTheme()}> 
                            <DarkMode /> 
                        </IconButton>
                        :
                        <IconButton onClick={() => context?.toggleTheme()}> 
                            <LightMode />
                        </IconButton> 
                        
                    }
                </Box> 
            </Toolbar>
      </AppBar>
    )
}

export default Header;