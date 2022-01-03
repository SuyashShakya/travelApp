import React from 'react';

export interface ContextWrapperInterface {
	theme?: any,
	toggleTheme?: any,
	isLightTheme?: any,
	alert?: any,
	setAlert?: any,
	isLoginForm?: any,
	setIsLoginForm?: any,
	user?: any,
	setUser?: any,
	selectedPlace?: any,
	setSelectedPlace?: any,
	type?: any,
	setType?: any,
	rating?: any,
	setRating?: any,
	filteredPlaces?: any,
	setFilteredPlaces?: any
}

export const ContextWrapper = React.createContext<ContextWrapperInterface | null>(null);

