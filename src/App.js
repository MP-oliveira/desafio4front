import React from "react";
import "./styles.css";
import { FormularioLogin } from "./components/form";

function autenticar(email, senha) {
  fetch("https://cubos-desafio-4.herokuapp.com/auth", {
    method: "POST",
    body: JSON.stringify({
      email,
      senha,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    /* o dados eh um nome escolhido por mim*/
    .then((dados) => console.log(dados));
}
export default function App() {
  return (
    <div className="App">
      <FormularioLogin
        onSubmit={(email, senha) => {
          autenticar(email, senha);
        }}
      />
    </div>
  );
}
