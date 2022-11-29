import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { routesArray } from './router/routerConfig';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLogin } from './redux/selectors/auth.selector';
import { useDispatch } from 'react-redux';
import { logoutAction } from './redux/actions/auth.actions';

function App() {
  const dispatch = useDispatch()
  const loginRemember = useSelector(selectLogin);
  
  useEffect(() => {
    if (!loginRemember.rememberMe){
      dispatch(logoutAction())
    }
  },[])

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
