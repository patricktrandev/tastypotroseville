import { Fragment } from "react";
import "./App.css";

import { Home } from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { Menu } from "./components/Menu";
import { Hotpot } from "./components/Hotpot";
import { About } from "./components/About";
import { Promotion } from "./components/Promotion";

function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu/:name" component={Hotpot} />
        <Route exact path="/about" component={About} />
        <Route exact path="/promotion" component={Promotion} />
      </Router>
    </Fragment>
  );
}

export default App;
