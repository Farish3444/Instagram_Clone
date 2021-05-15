import React from 'react';
import './App.css';
import HeaderPart from './Header/HeadPart';
import Story from './Component/Story/Story';
import NewsFeed from './Component/Story/NewsFeed/NewsFeed';
import Login from './Login/Login';
// 
import {
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter
  } 
from 'react-router-dom';
import Tables from './Table/Tables.jsx';
import MainStore from './MainStore';


function App() {
  return (
   <Switch>
     <Route to='/' exact component={Login}/>
   <Route to="/MainStore" component={MainStore}/>
   </Switch>
  );
}





export default App;