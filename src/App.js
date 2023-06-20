import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/views/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchImages } from './redux/heroReducer';
import Footer from './components/views/Footer/Footer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchImages(), [dispatch]));
  return (
    <main>
      <NavBar />
      <Container fluid='md'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
};

export default App;
