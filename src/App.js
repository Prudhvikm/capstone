import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './home/home';
import { Login } from './login/login';
import { Registration } from './registration/registration';

export const App = () =>  {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
