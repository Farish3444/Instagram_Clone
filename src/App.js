import React from 'react';
import './App.css';
import HeaderPart from './Header/HeadPart';
import Story from './Component/Story/Story';
import NewsFeed from './Component/Story/NewsFeed/NewsFeed';



function App() {
  return (
    <div className="App">
    <React.Fragment>
      <HeaderPart/>
      <Story />
      <NewsFeed />
    </React.Fragment>
    </div>
  );
}



export default App;