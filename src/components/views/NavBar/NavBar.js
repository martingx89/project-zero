import Hero from '../Hero/Hero';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Hero />
      <Navbar variant='dark' expand='lg' bg='primary'>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
      </Navbar>
    </>
  );
};

export default NavBar;
