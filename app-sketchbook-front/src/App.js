import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UsersIndex from "./components/UsersIndex";
//import PlayersIndex from "./components/PlayersIndex";
//import PlayersIndex from "./components/PlayersIndex";


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path= "/users" component={UsersIndex} />
         <Route />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
