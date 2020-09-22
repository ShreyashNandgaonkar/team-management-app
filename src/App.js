import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home/Home";
import CreateBoard from "./views/addBoard/CreateBoard";
import PageNotFound from "./views/pageNotFound/PageNotFound";
import Board from "./views/board/Board";

function App({handleLogOut}) {
  return (
    <div> 
    <button className="Logout" onClick={handleLogOut}>Logout</button>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/createboard" component={CreateBoard}></Route>
        <Route exact path="/:boardName" component={Board}></Route>
        <Route path="*" component={PageNotFound}></Route>
      </Switch>
    </Router>
    </div>

  );
}

export default App;
