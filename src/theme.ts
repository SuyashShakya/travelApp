import {createTheme} from '@material-ui/core/styles';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#c9ccd1',
        },
        secondary: {
            main: '#404347'
        },
    },
});
  
export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#404347',
        },
        secondary: {
            main: '#c9ccd1'
        },
    },
});