import './App.css'
import {useRoutes} from 'react-router-dom';
import getRoutes from './services/Routes';

function App() {
    const routing = useRoutes(getRoutes());
    return (
        <>
            {routing}
        </>
    );
}

export default App
