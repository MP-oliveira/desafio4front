import React from "react";
import "./style.css";
import { Eyes, ScratchedEyes } from "./components/VisibilidadeSenha/index";
import HeaderLight from "./components/Header/index.js";

export function FormularioLogin({onSubmit}) {
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const [senhaVisivel, setSenhaVisivel] = React.useState(false);
  return (
    <div className="centroLogin">
      <div className="formulario">
        <div className="centroFormulario">
          <HeaderLight />
          <form>
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
          </form>
          <div>
            <button
              onClick={() => {
				onSubmit(email,senha);
				
              }}
            >
              Entrar
            </button>
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
