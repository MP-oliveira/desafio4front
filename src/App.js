import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";
import { Login } from "./pages/PaginaLogin";
import { Cadastro } from "./pages/PaginaCadastro";
import { EsqueciSenha } from "./pages/PaginaEscqueci";
import { AuthContainer } from "./context/auth";

export default function App() {
  return (
    <AuthContainer.Provider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/cadastro">
              <Cadastro />
            </Route>
            <Route path="/esqueci">
              <EsqueciSenha />
            </Route>
           
            <Route path="/emailSucesso"></Route>
            <Route path="/home"></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContainer.Provider>
  );
}
