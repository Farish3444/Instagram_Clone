import React from 'react';
import './App.css';
import HeaderPart from './Header/HeadPart';
import Story from './Component/Story/Story';
import NewsFeed from './Component/Story/NewsFeed/NewsFeed';
import Login from './Login/Login';
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
import MainStore from './MainStore';
import ProfilePage from './ProfilePage';


function App() {
  return (
    <React.Fragment>
    <ToastContainer />
       
      <HeaderPart/> 
      <Story />
      <NewsFeed />
      {/* <Tables/> */}
      <ProfilePage path="/ProfilePage"/>
   
</React.Fragment>   
  );
}

    // <Switch>
    //   <Route to='/' component={Login}/>
    // </Switch>




export default App;