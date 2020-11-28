import React from "react";
import { Link } from "react-router-dom";
import { BodyAuth } from "../../components/BodyAuth";
import { FormularioLogin } from "../../components/form";
import autenticar from "../PaginaLogin";
import "./style.css";

export function Cadastro(params) {
  return (
    <BodyAuth
      rodape={"Não tem uma conta " + <Link to="/cadastro">Cadastre-se</Link>}
    >
      <FormularioLogin
        onSubmit={(email, senha) => {
          autenticar(email, senha);
        }}
      />
    </BodyAuth>
  );
}
