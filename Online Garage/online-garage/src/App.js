import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import GarageRegistration from './components/registration/GarageRegistration';
import UserRegistration from './components/registration/UserRegistration';
import Navbar from './components/Navbar';
import UserAuthentication from './components/authentication/UserAuthentication';
import Category from './components/Category';
import Garages from './components/Garages';
import Error from './components/Error';


function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Category/>}/>
        <Route path="/partners" element={<GarageRegistration/>}/>
        <Route path="/user" element={<UserRegistration/>}/>
        <Route path="/userAuthentication" element={<UserAuthentication/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/garages/:categoryName" element={<Garages/>}/>
        <Route path="/Error" element={<Error/>}/>
      </Routes>

    </>
    );
}

export default App;
