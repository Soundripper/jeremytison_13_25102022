import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { routesArray } from './router/routerConfig';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            {routesArray.map((route, index) => {
              return <Route key={index} path={route.path} element={route.component} ></Route> 
            })}
            {/* <Route path='*' element={<Navigate replace to="/"/>}/> */}
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
