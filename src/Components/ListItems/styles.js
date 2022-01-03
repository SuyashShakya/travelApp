import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
    },
    formControl: {
        marginLeft: 10,
        width: 100
    },
    inputLabel: {
        color: theme.palette.secondary.main
    }
}))

export default useStyles;