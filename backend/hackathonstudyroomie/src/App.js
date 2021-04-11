import './App.css';
import Header from "./components/Header"
import List from "./components/List"
import { Typography, AppBar } from '@material-ui/core';
import ParticlesBg from "particles-bg";
import { makeStyles } from '@material-ui/core/styles';
import Videroom from "./components/Videroom"
import Main from "./components/Main"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from './Context';


const  App = () => {


  return (
    <Router>
      <div>
      <ParticlesBg type="box" bg={true} color="blue" />
      <Switch>
          <Route path="/Videroom" component={Videroom} /> 
          <Route path="/" component={Main}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
