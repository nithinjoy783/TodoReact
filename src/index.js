import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './index.css';
import PersonList from './PersonList';
import DeleteList from './DeleteList';
import Todo from './Todo';


const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/PersonList">User List</Link>
        </li>
        <li>
          <Link to="/App">Todo Entry</Link>
        </li>
        <li>
          <Link to="/DeleteList">User Deletion By ID</Link>
        </li>
      </ul>
      <Route exact path="/" component={Todo} />
      <Route path="/PersonList" component={PersonList} />
      <Route path="/App" component={App} />
      <Route path="/DeleteList" component={DeleteList} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
