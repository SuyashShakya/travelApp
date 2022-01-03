import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    appbar : {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    
}))

export default useStyles;