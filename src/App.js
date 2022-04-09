import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Employees } from './Components/Employees';
import { Register } from './Components/Register';

function App() {
  const isAuth = useSelector((state) => state.isAuth)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={ isAuth ? <Home /> : <Login /> } />
        <Route path='/employees' element={ isAuth ? <Employees /> : <Login /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
