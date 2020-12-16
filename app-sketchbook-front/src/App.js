import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ProjectsIndex from "./components/ProjectsIndex";
import UsersIndex from "./components/UsersIndex";
import UserForm from "./components/UserForm";
//import PlayersIndex from "./components/PlayersIndex";


function App() {
  return (
    <div className="App">
     <Router>
     <Nav />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path= "/users" component={UsersIndex} />
         <Route path= "/projects" component={ProjectsIndex} />
         <Route path= "/user/new" component={UserForm} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
