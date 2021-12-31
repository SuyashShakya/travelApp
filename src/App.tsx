import React, {useState} from 'react';
import isEmpty from 'lodash/isEmpty';
import Grid from '@material-ui/core/Grid'
import {ThemeProvider} from '@material-ui/core/styles';

import Header from './Components/Header/Header';
import ListItems from './Components/ListItems/ListItems';
import Maps from './Components/Map/Map';
import {lightTheme, darkTheme} from './theme';
import {ContextWrapper, ContextWrapperInterface} from './Context';
import LoginForm from './Components/LoginForm/LoginForm';
import Alert from './Components/Alert';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
	const [isLightTheme, setIsLightTheme] = useState(true)
	const [isLoginForm, setIsLoginForm] = useState(true)
	const [alert, setAlert] = useState({
		open: false,
		message: '',
		type: 'success'
	})
	const [user, setUser] = useState<any | null>(null);

	React.useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user) setUser(user);
			else setUser(null)
		})
	}, [])

	const theme = isLightTheme ? lightTheme : darkTheme;

	const toggleTheme = () => {
		setIsLightTheme(!isLightTheme)
	};

	const context: ContextWrapperInterface = {
		theme,
		toggleTheme,
		isLightTheme,
		alert,
		setAlert,
		isLoginForm,
		setIsLoginForm,
		user,
		setUser
	};
	console.log('user', user)
	return (
		<ContextWrapper.Provider
			value={context}
		>
			{!isEmpty(user) ?
				<ThemeProvider theme={theme}>
					<Header />
					<Grid container>
						<Grid item xs={12} md={4}>
							<ListItems />
						</Grid>
						<Grid item xs={12} md={8}>
							<Maps />
						</Grid>
					</Grid>
				</ThemeProvider>
				: 
				<LoginForm />	
			}
			<Alert />
		</ContextWrapper.Provider>	
  	)
}

export default App;