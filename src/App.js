import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { Carousel } from 'react-responsive-carousel';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import Slider from './components/Slider';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
