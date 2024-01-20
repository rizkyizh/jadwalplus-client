import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import NavigationTop from './components/NavigationTop';
import NavigationBottom from './components/NavigationBottom';
import AddSchedulePage from './pages/AddSchedulePage';
import ArsipPage from './pages/ArsipPage';
import JadwalPage from './pages/JadwalPage';
import EditPage from './pages/EditPage';
import UserAccount from './pages/UserAccount';
import Loading from './components/Loading';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

const App = () => {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const location = useLocation();
  const path = location.pathname;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <div className="container mx-auto">
          {path !== '/register' && path !== '/login' && <Header />}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/JadwalPage" element={<JadwalPage />} />
            </Routes>
          </main>
          {path !== '/register' && path !== '/login' && <Footer />}
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="bg-[#F3EEEA]">
        <NavigationTop authUser={authUser} />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/schedules/arsip" element={<ArsipPage />} />
          <Route path="/schedule/add" element={<AddSchedulePage />} />
          <Route path="/schedule/edit/:id" element={<EditPage />} />
          <Route path="/user/setting" element={<UserAccount />} />
        </Routes>
        <NavigationBottom logout={onLogout} />
      </div>
    </>
  );
};

export default App;
