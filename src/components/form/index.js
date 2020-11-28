import React from "react";
import "./style.css";
import { Eyes, ScratchedEyes } from "../VisibilidadeSenha/index";

export function FormularioLogin({ onSubmit }) {
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const [senhaVisivel, setSenhaVisivel] = React.useState(false);

  return (
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
      <span className="esqueci-senha">
        <a href="/esqueci">Esqueci minha senha</a>
      </span>

      <button>Entrar</button>
    </form>
  );
}
