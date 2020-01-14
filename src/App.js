import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';

import New from "./components/New";

import Tasks from "./pages/Tasks";
import Home from "./pages/Home";

import {ReactComponent as HomeIcon} from './assets/home.svg';
import {ReactComponent as ActivityIcon} from './assets/activity.svg';
import {ReactComponent as TasksIcon} from './assets/tasks.svg';
import {ReactComponent as SavingsIcon} from './assets/dollar-sign.svg';
import {ReactComponent as RequestIcon} from './assets/request.svg';

import './App.scss';

function App() {
  const [account, setAccount] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/account-details');
      const accountDetails = await res.json();
      setAccount(accountDetails);
    })();
  }, []);


  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li>
              <NavLink exact to='/'><HomeIcon />Home</NavLink>
            </li>
            <li>
              <NavLink to='/activity'><ActivityIcon />Activity</NavLink>
            </li>
            <li>
              <NavLink to='/tasks'><TasksIcon /><span>Tasks</span><New /></NavLink>
            </li>
            <li>
              <NavLink to='/savings'><SavingsIcon />Savings</NavLink>
            </li>
            <li>
              <NavLink to='/request'><RequestIcon />Request</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path='/tasks'>
              <Tasks />
            </Route>
            <Route path='/'>
              <Home account={account} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
