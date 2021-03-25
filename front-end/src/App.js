import React from 'react'
import SignUp from './components/Signup'
import Login from './components/Login'
import Admin from './components/Admin'
import Home from './components/Home'
import AccountCreated from "./Views/AccountCreated"
import CreatedError from "./Views/CreatedError"
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App(){

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/created'>
          <AccountCreated/>
        </Route>
        <Route path="/createderror">
          <CreatedError/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='*'>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
