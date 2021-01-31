import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import loadable from '@loadable/component';
import './App.css';


const Home = loadable(() => import('./views/Home'));
const About = loadable(() => import('./views/About'));
const Users = loadable(() => import('./views/Users'));

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">react-loadable-component-with-continuous-deployment</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/users">Users</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/aleixmorgadas/react-loadable-component-with-continuous-deployment" target="_blank" rel="noreferrer" >GitHub Repository</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
