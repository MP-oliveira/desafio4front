import React from "react";
import { useHistory } from "react-router-dom";
import { BodyAuth } from "../../components/BodyAuth";
import { FormularioLogin } from "../../components/form";
import "./style.css";

export function cadastrar(email, senha, nome) {
  return fetch("https://cubos-desafio-4.herokuapp.com/usuarios", {
    method: "POST",
    body: JSON.stringify({
      email,
      senha,
      nome,
    }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  /* o dados eh um nome escolhido por mim*/
  //.then((dados) => console.log(dados));
}

export function Cadastro(props) {
  const history = useHistory();
  const [nome, setNome] = React.useState("");
  return (
    <div className="paginaCadastro">
      <BodyAuth
        rodape="Já possui uma conta "
        botao="Acesse sua Conta"
        link="/"
      >
        <label>
          <span>Nome</span>
          <input
            onInput={(event) => {
              setNome(event.target.value);
            }}
            className="login"
            type="email"
            placeholder="exemplo@gmail.com"
          />
        </label>
        <FormularioLogin
          onSubmit={(email, senha) => {
            if (!email) {
              alert("O email é obrigatorio");
            }
            if (!senha) {
              alert("A senha é obrigatória");
            }
            cadastrar(email, senha, nome).then((resposta) => {
              console.log(resposta);
              if (resposta.status === "sucesso") {
                history.push("/home");
              } else {
                alert(resposta.dados.message);
              }
            });
          }}
        />
		
      </BodyAuth>
    </div>
  );
}
