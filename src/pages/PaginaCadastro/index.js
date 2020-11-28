import React from "react";
import {Link} from "react-router-dom";
import { BodyAuth } from "../../components/BodyAuth";
import { FormularioLogin } from "../../components/form";
import { autenticar } from "../PaginaLogin";
import "./style.css";

export function Cadastro(props) {
  return (
    <div>
	  <BodyAuth rodape="Já possui uma conta " botao="Acesse sua Conta" 
	  link="/home">
        <label></label>
        <FormularioLogin
          onSubmit={(email, senha) => {
            autenticar(email, senha);
          }}
        />
      </BodyAuth>
     
    </div>
  );
}
