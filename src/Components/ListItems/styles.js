import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
    },
    formControl: {
        marginLeft: 10,
        width: 100
    },
    inputLabel: {
        color: theme.palette.secondary.main,
        fontSize: 12
    }
}))

export default useStyles;