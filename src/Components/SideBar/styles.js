import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: 30,
        width: 30,
        margin: 5
    },
    logoutButton: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
    },
    box: {
        width: 300,
        height: '100vh',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.main 
    },
    loginInfo: {
        color: theme.palette.secondary.main
    }
}))

export default useStyles;