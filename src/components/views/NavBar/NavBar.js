import Hero from '../Hero/Hero';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container fluid="md">
      <Hero />
      <Navbar variant='light' expand='lg' bg='white'>
        <Navbar.Brand href='/'>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/'>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/about'>
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
