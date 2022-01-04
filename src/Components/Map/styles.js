import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.light
    },
    header: {
        textAlign: 'center',
        color: theme.palette.secondary.main
    },
    leafletContainer: {
        [theme.breakpoints.down('sm')]: {
            height: '30vh'
        },
        height: '90vh'
    },
    divIcon: {
        display: 'flex',
        flexDirection: 'column',
        width: 90,
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main

    }
}))

export default useStyles;
