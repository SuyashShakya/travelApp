import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: 5,
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
        justifyContent: 'space-between'
    },
    spacing: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}))

export default useStyles; 
