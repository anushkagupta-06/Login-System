import './App.css';
import Auth from './components/auth/Auth';
import Home from './components/home/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>} /> 
      </Routes>
    </Router>
   </>  
  );
}

export default App;