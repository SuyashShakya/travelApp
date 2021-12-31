import {makeStyles} from '@material-ui/core/styles';
import Background from '../../assets/images/login_background.jpeg';

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover'
    }
}))

export default useStyles;