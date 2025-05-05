import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage'
import MainHeader from './Components/MainHeader/MainHeader';
import Footer from './Components/Footer/Footer';
import ContactPage from './Components/ContactPage/ContactPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ResidentialPage from './Components/ServicesPages/ResidentialPage';
import CommercialPage from './Components/ServicesPages/CommercialPage';
import GuttersPage from './Components/ServicesPages/GuttersPage';
import SidingPage from './Components/ServicesPages/SidingPage';
import WindowsPage from './Components/ServicesPages/WindowsPage';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import SuccessPage from './Components/ContactPage/SuccessPage';
import ReviewsPage from './Components/ReviewsPage/ReviewsPage';

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/home' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
        <Route path='/residential-roofing' Component={ResidentialPage} />
        <Route path='/commercial-roofing' Component={CommercialPage} />
        <Route path='/siding-enhancements' Component={SidingPage} />
        <Route path='/gutter-systems' Component={GuttersPage} />
        <Route path='/window-services' Component={WindowsPage} />
        <Route path='/projects' Component={ProjectsPage} />
        <Route path='/reviews' Component={ReviewsPage} />
        <Route path='/contact' Component={ContactPage} />
        <Route path='/success-page' Component={SuccessPage} />
        <Route path='*' Component={HomePage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
