import React from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import "./styles.css";
import { Login } from "./pages/PaginaLogin";

export default function App() {
  return (
	<BrowserRouter>
     <div className="App">
	
	  <Switch>
       <Route exact path="/">
		   <Login/>
	   </Route>
	   <Route path="/cadastro">
		   
	   </Route>
	 
	  </Switch>
	
    </div>
	</BrowserRouter>
  );
}
