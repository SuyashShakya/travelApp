import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        margin: 5
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
