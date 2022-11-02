import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/User/Profile';
import './App.css';

function App() {
  // );
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} > </Route>
            <Route path="/login" element={<Login />} > </Route>
            <Route path="/profile" element={<Profile />} > </Route>
        </Routes>
      <Footer />
    
    
    </BrowserRouter>
  );
}

export default App;
