import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Portfolio } from './components/Portfolio/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/portfolio'>Portfolio</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
