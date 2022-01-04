import {createTheme} from '@material-ui/core/styles';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#f2ebeb',
        },
        secondary: {
            main: '#361111'
        },
    },
});
  
export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#361111',
        },
        secondary: {
            main: '#f2ebeb'
        },
    },
});