import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Analytics from '../containers/Analytics/Analytics';
import Content from '../containers/Content';
import Customization from '../containers/Customization';
import Dashboard from '../containers/Dashboard';

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/content' element={<Content />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/customization' element={<Customization />} />
    </Routes>
};

export default AppRoutes;