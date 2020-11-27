import React from "react";
import { FormularioLogin } from "../../components/form";
import HeaderLight from "../../components/Header";
import "./style.css";

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

export function Login(props) {
  return (
    <div className="centroLogin">
      <div className="formulario">
        <div className="centroFormulario">
          <HeaderLight />
          <FormularioLogin
            onSubmit={(email, senha) => {
              autenticar(email, senha);
            }}
          />
          <div>
            <button>Entrar</button>
          </div>
        </div>
      </div>
      <div className="rodapeLogin">
        <p className="temConta">
          Já possui conta?{" "}
          <a className="cadastreSe" href="/">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
