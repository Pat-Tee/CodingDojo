import './App.css';
import AllQuotes from './components/allquotes';
import {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import NewQuoteForm from './components/newquoteform';
import OneQuote from './components/oneQuote';

function App() {

  const [bG, setBG] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  { document.body.style.backgroundColor = bG; }

  const toggleDarkMode = ()=>{
    if (bG === "white") {
      setBG("#2a2a2a");
      setFontColor("white");
    }
    else {
      setBG("white");
      setFontColor("black");
    }
  }

  return (
    <BrowserRouter>
    <div className="App container" style={{backgroundColor: bG, color: fontColor}}>
      <Link to="/" className="m-3 btn btn-primary">Home</Link>
      <button onClick={toggleDarkMode}>DarkMode</button>
      <Link to="/new" className="ms-5 btn btn-success">Add new quote</Link>
      <Switch>
        <Route exact path="/">
          <AllQuotes backGround={bG} fontColor={fontColor} />
        </Route>
        <Route exact path="/new">
          <NewQuoteForm backGround={bG} fontColor={fontColor} />
        </Route>
        <Route exact path="/quotes/:id">
          <OneQuote backGround={bG} fontColor={fontColor} />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
