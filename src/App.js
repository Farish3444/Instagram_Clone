import React from 'react';
import './App.css';
import HeaderPart from './Header/HeadPart';
import Story from './Component/Story/Story';
import NewsFeed from './Component/Story/NewsFeed/NewsFeed';
import Login from './Login/Login';
import Suggests from './InstaPersonals/Suggests';
// 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter,
  Router
  } 
from 'react-router-dom';
// import Tables from './Table/Tables.jsx';




function App() {
  return (
    <React.Fragment>
    <ToastContainer />     
      <HeaderPart/> 
      <Story />
      <NewsFeed />
      <Suggests />
</React.Fragment>   
  );
}

    // <Switch>
    //   <Route to='/' component={Login}/>
    // </Switch>




export default App;