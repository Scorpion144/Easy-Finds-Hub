import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import HomeDecor from './pages/HomeDecor';
import TravelDeals from './pages/TravelDeals';
import HomeAppliances from './pages/HomeAppliances';
import GardenPlanting from './pages/GardenPlanting';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home-decor" element={<HomeDecor />} />
              <Route path="/travel-deals" element={<TravelDeals />} />
              <Route path="/home-appliances" element={<HomeAppliances />} />
              <Route path="/garden-planting" element={<GardenPlanting />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/article/:category/:slug" element={<Article />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard/*"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;