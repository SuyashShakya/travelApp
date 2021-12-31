import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    registerText : {
        textAlign: 'center'
    },
    alreadyRegistedText: {
        textAlign: 'center'
    },
    loginText: {
        color: '#0000FF'
    },
    loginButton: {
        textTransform: 'none',
    }
}))

export default useStyles;