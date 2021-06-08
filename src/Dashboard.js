import React from 'react';
import {Link, useRouteMatch, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import New from './components/New';
import Signup from './components/Signup';

function Dashboard() {
  let { path, url } = useRouteMatch();
  return (
    <div className="row">
      <div className="sidebar">
        <h1>Diário Digital</h1>
      </div>
      <div className="main">
        <div className="navbar">
          <Link to={`${url}/home`}>Home</Link>
          <Link to={`${url}/about`}>About</Link>
          <Link to={`${url}/new`}>New</Link>
        </div>
        <Switch>
          <Route exact path={path}/>
          <Route path={`${path}/about`}>
            <About />
          </Route>
          <Route path={`${path}/home`}>
            <Home />
          </Route>
          <Route path={`${path}/new`}>
            <New />
          </Route>
          <Route path={`${path}/signup`}>
            <Signup />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Dashboard;
