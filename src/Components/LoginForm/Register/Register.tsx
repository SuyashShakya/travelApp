import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';
import { ContextWrapper } from '../../../Context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

interface RegisterFormProps {
    onLogin?: any,
    setIsLoginForm?: any
}

const Register: React.FC<RegisterFormProps>  = ({onLogin, setIsLoginForm}) => {
    const classes = useStyles();
    const context = React.useContext(ContextWrapper);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleRegisterSubmit = async () => {
        if(password !== confirmPassword){
            context?.setAlert({
                open: true,
                message: 'passwords do not match',
                type: 'error'
            })
        }
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            context?.setAlert({
                open: true,
                message: `Sign up Successful. You have registered with ${result.user.email}`,
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

    return (
        <Paper elevation={3}>
            <Box width={isSmallScreen ? 200 : 300} p={5}>
                <Typography variant='h6' className={classes.registerText}><b>Sign up</b></Typography>
                <br/>
                <FormControl variant='standard' fullWidth>
                    <Input
                        type='email'
                        placeholder='Email'
                        startAdornment={
                            <InputAdornment position='start'>
                                <EmailIcon/>
                            </InputAdornment>
                        }
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <br/> <br />
                <FormControl variant='standard' fullWidth>    
                    <Input
                        type='password'
                        placeholder='Password'
                        startAdornment={
                            <InputAdornment position='start'>
                                <LockIcon/>
                            </InputAdornment>
                        }
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>    
                <br/> <br/>
                <FormControl variant='standard' fullWidth>      
                    <Input
                        type='password'
                        placeholder='Confirm Password'
                        startAdornment={
                            <InputAdornment position='start'>
                                <LockIcon/>
                            </InputAdornment>
                        }
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </FormControl>    
                <br /> <br />
                <FormControl variant='standard' fullWidth>   
                    <Button variant='contained'color='primary' onClick={handleRegisterSubmit}>Register</Button>
                </FormControl>
                <br /> <br/>
                <Typography variant='caption' className={classes.alreadyRegistedText}>Already registered?<Button className={classes.loginButton} onClick={onLogin}><Typography variant='caption' className={classes.loginText}>Login</Typography></Button></Typography>
                
            </Box>
        </Paper>
    )
}

export default Register;