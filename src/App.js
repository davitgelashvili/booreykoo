import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './Pages/Main/Main'
import Header from './Components/Common/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import AboutPage from './Pages/About/About';
import ServicesPage from './Pages/Services/Services';
import PortfolioPage from './Pages/Portfolio/Portfolio';
import { useEffect } from 'react';
import { GlobalVariablesAction } from './Store/GlobalVariables';
import DetailPage from './Pages/Detail/Detail';

function App() {
    const sidebar = useSelector( state => state.GlobalVariables.sidebar)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(()=>{
        dispatch(GlobalVariablesAction.changeSidebar(false))
    }, [location])
    
    return (
        <div className='app'>
            <Header />
            {sidebar && 
                <Sidebar />
            }
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='/:id' element={<DetailPage />} />
            </Routes>
        </div>
    );
}

export default App;
