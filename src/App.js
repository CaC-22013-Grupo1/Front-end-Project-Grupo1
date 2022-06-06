<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/navbar.js";
import Home from "./Components/Home/home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
=======
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar.js';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Signup from './Components/Singup/Signup';
import Login from './Components/Login/Login';
import { AuthProvider } from './context/AuthContext';


function App() {
    return (
      <AuthProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
      </AuthProvider>
    );
>>>>>>> 43a752cc375f59da03023de0188c7ae45c5d730d
}

export default App;
