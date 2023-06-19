import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/views/NavBar/NavBar';
import Home from './components/pages/Home/Home';

const App = () => {
  return (
    <>
      <main>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;
