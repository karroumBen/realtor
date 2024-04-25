import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import '../../src/assets/styles/global.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/auth';

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate('/login');
    }

    const name = localStorage.getItem('username');
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const isSeller = localStorage.getItem('isSeller') == 'false' ? false : true ;
    dispatch(setUser({ accessToken,name, isAuthenticated: isAuthenticated, isSeller }));

    if(location.pathname === '/customers' && isSeller) {
      navigate('/unauthorized');
    }

    if(location.pathname === '/sellers' && !isSeller) {
      navigate('/unauthorized');
    }
  }, [auth.isSeller, auth.isAuthenticated])
  
    return (
      <ChakraProvider>
        <NavBar />
        <div className="container">
          <section className="main-content">
            <Outlet />
          </section>
        </div>
      </ChakraProvider>
    )
}

export default MainLayout;