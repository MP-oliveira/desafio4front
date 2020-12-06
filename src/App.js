import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";
import { Login } from "./pages/PaginaLogin";
import { Cadastro } from "./pages/PaginaCadastro";
import { EsqueciSenha } from "./pages/PaginaEscqueci";
import { AuthContainer } from "./context/auth";
// import './App.css';
import { Sidebar } from './components/sidebar';
import Home from './pages/home';
import CriarCobranca from './pages/criarCobranca';

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


            <Route exact path="/home">
            <Sidebar />
              <div className="direita">
                
                <Home />
              </div>
            </Route>
            <Route exact path="/criar/cobrancas">
              <div className="direita">
                <CriarCobranca />
              </div>
            </Route>

          </Switch>

        </div>
      </BrowserRouter>
    </AuthContainer.Provider>
  );
}
