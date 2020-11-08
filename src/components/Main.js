import React from "react";
import Hello from "./Hello";
import { Route, Switch } from "react-router-dom";
import ExecHermes from "./ExecHermes";

function Main(props) {
  return (
    <main className="Main">
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/hermes" component={ExecHermes}/>
      </Switch>
    </main>
  );
}

export default Main;
