import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              The Hodophiles
            </a>
            <button class="navbar-toggler" type="button"></button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/Home" className="nav-link active">
                    HOME
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/About" className="nav-link active">
                    ABOUT
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Contact" className="nav-link active">
                    CONTACT
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Events" className="nav-link active">
                    EVENTS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
