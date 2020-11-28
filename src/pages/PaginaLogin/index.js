import React from "react";
import { Link } from "react-router-dom";
import { BodyAuth } from "../../components/BodyAuth";
import { FormularioLogin } from "../../components/form";
import "./style.css";

export function autenticar(email, senha) {
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

export function Login(props) {
  return (
	<BodyAuth rodape="Não tem uma conta " 
	          botao="Criar Conta" 
	          link="/cadastro">
      <FormularioLogin
        onSubmit={(email, senha) => {
          autenticar(email, senha);
        }}
      />
    </BodyAuth>
  );
}
