// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import CryptoCoins from './components/CryptoCoins';
// import CryptoCoinsAxios from './components/CryptoCoins_Axios'
// import Info from './components/Info';

function App() {

  return (
    <div className="App">
      
      {/* <BrowserRouter> */}
        {/* <h1>Hello</h1> */}
        {/* <Switch>
          <Route exact path="/">
            <h3><Link to="/about">About</Link></h3>
            <h3><Link to="/home">Home</Link></h3>
          </Route>
          <Route exact path="/info/:id">
            <Info></Info>
            <h3><Link to="/">Back</Link></h3>
          </Route>
          <Route exact path="/home">
            <h3>Home</h3>
            <h3><Link to="/">Back</Link></h3>
          </Route>
        </Switch>
      </BrowserRouter> */}
      {/* <CryptoCoinsAxios /> */}
      <CryptoCoins/>
    </div>
  );
}

export default App;
