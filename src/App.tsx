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
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlaces} from './Redux/actions/actions';

const App = () => {
	const dispatch = useDispatch();
	const [isLightTheme, setIsLightTheme] = useState(true)
	const [isLoginForm, setIsLoginForm] = useState(true)
	const [alert, setAlert] = useState({
		open: false,
		message: '',
		type: 'success'
	})
	const [user, setUser] = useState<any | null>(null);
	const [coordinates, setCoordinates] = useState({lat: 27, lng: 85});
	const [selectedPlace, setSelectedPlace] = React.useState()
	const [type, setType] = useState<any | null>('restaurants');
	const [rating, setRating] = useState<any | null>('');
	const [filteredPlaces, setFilteredPlaces] = useState<any | null>([]);
	const places = useSelector((state: any) => state?.places);

	React.useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user) setUser(user);
			else setUser(null)
		})
		const getGeoLocation = async () => {
			await navigator?.geolocation?.getCurrentPosition((data: any) => {
				setCoordinates({lat: data?.coords?.latitude, lng: data?.coords?.longitude})
			})
		}
		getGeoLocation();
	}, [])

	React.useEffect(() => {
		dispatch(fetchPlaces({coordinates, type}))
		setFilteredPlaces([])
	}, [coordinates, dispatch, type])

	/* eslint-disable */
	React.useEffect(() => {
		if(!isEmpty(places)){
			const filterPlaces = places.filter((item: any) => Number(item?.rating) > rating)
			setFilteredPlaces(filterPlaces)
		}
	}, [rating])

	console.log('filter', filteredPlaces, rating)
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
		setUser,
		selectedPlace,
		setSelectedPlace,
		type,
		setType,
		rating,
		setRating,
		filteredPlaces,
		setFilteredPlaces
	};
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
							<Maps 
								coordinates={coordinates}
								setCoordinates={setCoordinates}
							/>
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