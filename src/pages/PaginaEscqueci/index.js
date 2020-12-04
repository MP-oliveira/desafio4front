import React from "react";
import { BodyAuth } from "../../components/BodyAuth";
import { FormularioEsqueciSenha } from "../../components/formesqueciSenha/index";

import "./style.css";

export function EsqueciSenha(props) {
  return (
	  <div className="paginaEsqueci">

    <BodyAuth hideRodaPe>
      <FormularioEsqueciSenha />
    </BodyAuth>
	  </div>
  );
}
