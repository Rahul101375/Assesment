import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Containt from './Componet/Containt';
import Home from './Componet/Home';

function App() {
  return (
    <Router>
     <Home>
       <Route path={"/"}  component={Containt}/>
     </Home>    
   </Router>
  );
}

export default App;
