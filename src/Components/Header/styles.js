import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    appbar : {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    
}))

export default useStyles;