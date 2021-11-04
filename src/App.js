import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './Pages/About/About';
import { Home } from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Container className='app' fluid={true}>
        <Navbar bg='transparent' expand='lg'>
          <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
          <Navbar.Collapse>
            <Nav className='m-auto'>
              <Link className='nav-link text-primary navlink' to='/'>Home</Link>
              <Link className='nav-link text-primary navlink' to='/about'>About</Link>
              <Link className='nav-link text-primary navlink' to='/contact'>Contact</Link> 
            </Nav>
          </Navbar.Collapse>
        </Navbar >
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
      </Container>
    </Router>
    
  );
}

export default App;
