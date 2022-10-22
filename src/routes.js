import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sala from './pages/App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function AppRouter (){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}   />
                <Route path='/sala/:id' element={<Sala/>}  />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}