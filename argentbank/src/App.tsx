import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import './App.css';

function App() {
  // );
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} > </Route>
            <Route path="/sign-in" element={<SignIn />} > </Route>
            <Route path="/user" element={<User />} > </Route>
        </Routes>
      <Footer />
    
    
    </BrowserRouter>
  );
}

export default App;
