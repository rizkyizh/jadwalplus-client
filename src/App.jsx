import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

const App = () => {
  // false --> halaman sebelum login
  // true --> halaman setelah login
  const [authUser, setAuthUser] = useState(true);
  const location = useLocation();
  const path = location.pathname;

  if (authUser === false) {
    return (
      <div>
        { path !== '/register' && path !== '/login' && <Header /> }
        <main>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        { path !== '/register' && path !== '/login' && <Footer /> }
      </div>
    );
  }

  return (
    <div className="min-height-100">
      <NavigationTop />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/schedule/add" element={<AddSchedulePage />} />
      </Routes>
      <NavigationBottom />
    </div>
  );
};

export default App;
