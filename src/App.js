import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import EvgaQueue from './components/EvgaQueue';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/evgaQueue">EVGA Queue</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section className="App-content">
          <Switch>
            <Route path="/evgaQueue"> 
              <EvgaQueue />
            </Route>            
            <Route path="/">
              <Home />
            </Route>
          </Switch>        
        </section>
      </div>
    </Router>
  );
}

export default App;
