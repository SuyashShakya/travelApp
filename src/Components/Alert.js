import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {ContextWrapper} from '../Context';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = () => {
    const context = React.useContext(ContextWrapper);
    const handleClose = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        context.setAlert({open: false})
    }

    return (
        <Snackbar 
            open={context?.alert?.open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <MuiAlert
                onClose={handleClose}
                elevation={10}
                variant='filled'
                severity={alert.type}
            >
                {context.alert.message}
            </MuiAlert>
        </Snackbar>
    )
}

export default Alert;