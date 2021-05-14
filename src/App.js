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

const main = (
<Route component={App}>
      <Route path='/HeaderPart' component={HeaderPart} />
      <Route path="/Story" component={Story}/>
      <Route path='/NewsFeed' component={NewsFeed}/>
</Route>


)

function App() {
  return (
    <div className="App">
    <React.Fragment>
    
    {main}
  
      {/* <HeaderPart/> */}
      {/* <Story /> */}
      {/* <NewsFeed /> */}
      <Login />
    </React.Fragment>
    </div>
  );
}





export default App;