import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import UsersIndex from "./components/UsersIndex";
import UserForm from "./components/UserForm";
import ProjectForm from "./components/ProjectForm";
import UserShow from "./components/UserShow";
import WIPShow from "./components/WIPShow";
import ProjectEdit from "./components/ProjectEdit";
import CompleteShow from "./components/CompleteShow";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UsersIndex} />
          <Route path="/user/new" component={UserForm} />
          <Route path="/project/:id/new" component={ProjectForm} />
          <Route path="/users/:id" component={UserShow} />
          <Route path="/projects/:id" component={WIPShow} />
          <Route path="/project/:id/edit" component={ProjectEdit} />
          <Route path="/project/:id/complete" component={CompleteShow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
