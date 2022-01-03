import React, {useState} from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Box from '@material-ui/core/Box'
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';
import { ContextWrapper } from '../../../Context';
import { auth } from '../../../firebase';
import GoogleButton from 'react-google-button';

interface LoginFormProps {
	onClickRegister?: any,
}

const Login: React.FC<LoginFormProps>  = ({onClickRegister}) => {
    const classes = useStyles();
    const context = React.useContext(ContextWrapper);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleLoginSubmit = async () => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            context?.setAlert({
                open: true,
                message: `Login Successful. Welcome ${result.user.email}`,
                type: 'success'
            })
            context?.setIsLoginForm(true)
        } catch (e) {
            context?.setAlert({
                open: true,
                message: (e as Error).message,
                type: 'error'
            })
        }
    }

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider)
            context?.setAlert({
                open: true,
                message: `Sign up Successful, Welcome ${res?.user?.email}`,
                type: 'success'
            })
        } catch (e){
            context?.setAlert({
                open: true,
                message: (e as Error).message,
                type: 'error'
            })
        }
        
    }

    return (
        <Paper elevation={3}>
            <Box width={isSmallScreen ? 200 : 300} p={5}>
                <Typography variant='h6' className={classes.loginText}><b>Sign in</b></Typography>
                <br/>
                <FormControl variant='standard' fullWidth>
                    <Input
                        type='email'
                        placeholder='Email'
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon/>
                            </InputAdornment>
                        }
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl >
                <br/> <br />
                <FormControl variant='standard' fullWidth>    
                    <Input
                        type='password'
                        placeholder='Password'
                        startAdornment={
                            <InputAdornment position="start">
                                <LockIcon/>
                            </InputAdornment>
                        }
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <br/> <br />
                <FormControl variant='standard' fullWidth>
                    <Button variant='contained' color='primary' onClick={handleLoginSubmit}>Login</Button>
                </FormControl>
                <br/> <br />
                <FormControl variant='standard' fullWidth>
                    <Button variant='contained'color='primary'onClick={onClickRegister}>Register</Button>
                </FormControl>
                <br /><br />
                <Typography variant='subtitle2' className={classes.orText}>OR</Typography>
                <br />    
                <GoogleButton
                    style={{width: '100%'}}
                    onClick={signInWithGoogle}
                />
            </Box>
        </Paper>
    )
}

export default Login;