import {Navigate} from 'react-router-dom';
import Accueil from '../components/Accueil/Accueil';

const getRoutes = () => [
    {
        path: '/',
        element: <Accueil/>
    }
]


export default getRoutes