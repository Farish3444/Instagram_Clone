import React from 'react'
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


function MainStore() {
    return (       
<React.Fragment>   
      <HeaderPart/> 
      <Story />
      <NewsFeed />
      <Tables/>
</React.Fragment>            
    )
}

export default MainStore;
