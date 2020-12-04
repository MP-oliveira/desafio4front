import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function FormularioEsqueciSenha({ onSubmit }) {
  const [setEmail] = React.useState();

  return (
    <div className="formEsqueciSenha">
      <label>
        <div className="esqueciConteudo">
          {" "}
          Informe o email associado a sua conta e vamos te enviar instruções
          para resetar sua conta
        </div>
        {/* react get email ou get text from input */}
        <label className="labelEmail">E-mail</label>
        <input
          onInput={(event) => {
            setEmail(event.target.value);
          }}
          className="login"
          type="email"
          placeholder="exemplo@gmail.com"
        />
      </label>

      <button>
        <Link to="/">Recuperar Senha</Link>
      </button>
    </div>
  );
}
