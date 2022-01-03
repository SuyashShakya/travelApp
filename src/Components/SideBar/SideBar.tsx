import React from 'react';
import { IconButton, Drawer, Button, Avatar, Box, Typography} from '@material-ui/core';

import { ContextWrapper } from '../../Context';
import useStyles from './styles';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

const SideBar = () => {
    const classes = useStyles();
    const context = React.useContext(ContextWrapper);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
        ) => {
        if (
        event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
            ) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };

    const logout = () => {
        signOut(auth);

        context?.setAlert({
            open: true,
            type: 'success',
            message: 'Logout Successful'
        })
    } 

    const SideBarContent = () => {
        return (
            <Box display='flex' className={classes.box}>
                <Typography className={classes.loginInfo}>You are logged in with: {context?.user?.email}</Typography>
                <Button variant='contained' className={classes.logoutButton} onClick={logout}>Logout</Button> &nbsp; &nbsp;
            </Box>
        )   
    }

    return (
        <div>
        {(['right'] as Anchor[]).map((anchor) => (
            <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)}>
                    <Avatar alt={context?.user?.email} src={context?.user?.photoURL} className={classes.avatar}/>
                </IconButton>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    <SideBarContent />
                </Drawer>
            </React.Fragment>
        ))}
        </div>
  );
}

export default SideBar;