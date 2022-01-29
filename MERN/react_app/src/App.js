import React from 'react';
import './App.css';
// import PersonCard from './components/PersonCard';
// import PersonCard2 from './components/PersonCard2';
// import PersonForm from './components/PersonForm';
// import UserForm from './components/UserForm';
// import BoxGenerator from './components/BoxGenerator';
// import Tabs from './components/Tabs';
// import ToDoList from './components/ToDoList';
import PokemonList from './components/PokemonList';

function App() {

  return (
    <div className="App">
      
      <PokemonList />
      
    </div>
  );
}

///////////////////
// BigInversion assignment
///////////////////
/* <h1>Persons: </h1>

<ul>
  <li><PersonCard2 firstName="John" lastName="Smith" age={45} hairColor="Black" /></li>
  <li><PersonCard2 firstName="Jane" lastName="Smith" age={45} hairColor="Brown" /></li>
  <li><PersonCard2 firstName="Johnny" lastName="Smith" age={15} hairColor="Blonde" /></li>
  <li><PersonCard2 firstName="Judith" lastName="Smith" age={15} hairColor="Red" /></li>
</ul> */

/////
//// This is the main assignment
/////
/*
<ul>
  <li><PersonCard firstName="John" lastName="Stone" age={50} hairColor="brown" /></li>
  <li><PersonCard firstName="Julie" lastName="Stone" age={45} hairColor="brown" /></li>
  <li><PersonCard firstName="Zoey" lastName="Stone" age={10} hairColor="brown" /></li>
  <li><PersonCard firstName="Junior" lastName="Stone" age={12} hairColor="brown" /></li>
</ul>

</div> */
// function App() {
//   return (
//     <div className="App">

//       <h1>Hello Dojo!</h1>
//       <h3>Things I need to do:</h3>
//       <ul>
//         <li>Learn React</li>
//         <li>Write a resume</li>
//         <li>Find a job</li>
//         <li>Profit</li>
//       </ul>
      
//     </div>
//   );
// }

export default App;
