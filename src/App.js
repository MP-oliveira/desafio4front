import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";
import { Login } from "./pages/PaginaLogin";
import { Cadastro } from "./pages/PaginaCadastro";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
