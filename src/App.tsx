import './App.css'
import {useRoutes} from 'react-router-dom';
import Routes from './services/Routes';

function App() {
    const routing = useRoutes(Routes());
    return (
        <>
            {routing}
        </>
    );
}

export default App
