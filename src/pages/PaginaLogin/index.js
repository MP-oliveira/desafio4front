import React from "react";
import { Link, useHistory } from "react-router-dom";
import { BodyAuth } from "../../components/BodyAuth";
import { FormularioLogin } from "../../components/form";
import { AuthContainer } from "../../context/auth";
import "./style.css";

export function autenticar(email, senha) {
  return fetch("https://cubos-desafio-4.herokuapp.com/auth", {
    method: "POST",
    body: JSON.stringify({
      email,
      senha,
    }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  /* o dados eh um nome escolhido por mim*/
  //.then((dados) => console.log(dados));
}

export function Login(link, rodape) {
  const history = useHistory();
  const { setToken } = AuthContainer.useContainer();
  return (
    <div className="minhaSenha">
      <BodyAuth
        className="paginaLogin"
        rodape="Não tem uma conta "
        botao="Cadastre-se"
        // link="/cadastro"
      >
        <FormularioLogin
          onSubmit={(email, senha) => {
            autenticar(email, senha).then((dados) => {
              if (dados.dados.token) {
                setToken(dados.dados.token);
                history.push("/home");
              } else {
                alert(dados);
              }
            });
          }}
        />
      </BodyAuth>
    </div>
  );
}
