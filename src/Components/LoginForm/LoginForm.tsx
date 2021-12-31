import React from 'react';
import Box from '@material-ui/core/Box';

import Login from './Login/Login';
import Register from './Register/Register';
import useStyles from './styles';
import {ContextWrapper} from '../../Context';

const LoginForm = () => {
    const context = React.useContext(ContextWrapper);
    const classes = useStyles();
    return (
        <Box display='flex' height='100vh' alignItems='center' justifyContent='center' className={classes.root}>
            {context?.isLoginForm ?
                <Login onClickRegister={() => context?.setIsLoginForm(false)}/>
                :
                <Register onLogin={() => context?.setIsLoginForm(true)} />
            }
        </Box>
    )
}

export default LoginForm;