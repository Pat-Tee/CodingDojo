import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Luke APIWalker</h1>
      <SearchForm />
      <Switch>
        <Route exact path="/:category/:id">
          <Display></Display>
        </Route>

      </Switch>
    </div>
    </BrowserRouter> 
  );
}

export default App;
