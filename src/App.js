import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
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
// import { MainHeader } from './Components/MainHeader/MainHeader';
import MainHeader from './Components/MainHeader/MainHeader';

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/residential-roofing' element={<ResidentialPage />} />
        <Route path='/commercial-roofing' element={<CommercialPage />} />
        <Route path='/siding-enhancements' element={<SidingPage />} />
        <Route path='/gutter-systems' element={<GuttersPage />} />
        <Route path='/window-services' element={<WindowsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/reviews' element={<ReviewsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/success-page' element={<SuccessPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
