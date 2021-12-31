import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import firebaseConfig from './config/firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)

