import './App.css';
import AllProducts from './components/AllProducts';
import {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import NewProductForm from './components/NewProductForm';
import ViewProduct from './components/ViewProduct';
import EditProduct from './components/EditProduct';

function App() {

  const [bG, setBG] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  document.body.style.backgroundColor = bG;

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
      <button onClick={toggleDarkMode}>DarkMode</button>
      <Link to="/" className="ms-5 btn btn-primary">Home</Link>
      <Link to="/new" className="ms-5 btn btn-success">Add new product</Link>
      <Switch>
        <Route exact path="/">
          <AllProducts backGround={bG} fontColor={fontColor} />
        </Route>
        <Route exact path="/new">
          <NewProductForm backGround={bG} fontColor={fontColor} />
        </Route>
        <Route exact path={`/products/:id`}>
          <ViewProduct backGround={bG} fontColor={fontColor}/>
        </Route>
        <Route exact path={`/products/edit/:id`}>
          <EditProduct backGround={bG} fontColor={fontColor}/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
