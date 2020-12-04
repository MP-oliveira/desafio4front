import React from "react";
import "./style.css";
import { Eyes, ScratchedEyes } from "../VisibilidadeSenha/index";
import { Link } from "react-router-dom";

export function FormularioLogin({ onSubmit, link, rodape, botao }) {
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const [senhaVisivel, setSenhaVisivel] = React.useState(false);

  return (
	  <div className="form">
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(email, senha);
      }}
    >
      <label>
        <span>E-mail</span>
        {/* react get email ou get text from input */}
        <input
          onInput={(event) => {
            setEmail(event.target.value);
          }}
          className="login"
          type="email"
          placeholder="exemplo@gmail.com"
        />
      </label>
      <label>
        <span>Senha</span>
        <div className="inputEnvelop">
          <input
            onInput={(event) => {
              setSenha(event.target.value);
            }}
            className="login"
            type={senhaVisivel ? "text" : "password"}
          />
          {senhaVisivel ? (
            <Eyes
              className="visibilidadeSenha"
              onClick={() => setSenhaVisivel(!senhaVisivel)}
            />
          ) : (
            <ScratchedEyes
              className="visibilidadeSenha"
              onClick={() => setSenhaVisivel(!senhaVisivel)}
            />
          )}
        </div>
      </label>
      <div className="rodapeLogin">
        <p className="temConta">
          <span className="link">
            <Link to={link}>{botao}</Link>
          </span>
          {rodape}
        </p>
      </div>

      <button className="botaoEntrar">Entrar</button>
    </form>
	</div>
  );
}
