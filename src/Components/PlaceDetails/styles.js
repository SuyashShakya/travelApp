import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: 10,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.main,
    },
    chip: {
        marginRight: 5,
        marginBottom: 5
    },
    subtitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.palette.secondary.main
    },
    spacing: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.palette.secondary.main
    },
    colorStyle: {
        color: theme.palette.secondary.main
    } 
}))

export default useStyles; 
