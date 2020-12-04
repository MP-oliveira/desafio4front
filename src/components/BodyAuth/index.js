import React from "react";
import { HeaderLight } from "../Header";
import { Link } from "react-router-dom";

export function BodyAuth(props) {
  return (
    <div className={`centroLogin ${props.className || ""}`}>
      <div className="formulario">
        <div className="centroFormulario">
          <HeaderLight />
          {props.children}
        </div>
      </div>
      {!props.hideRodaPe && (
        <div className="rodapeLogin">
          <p className="temConta">
            {props.rodape}
            <Link to={props.link}>
              {" "}
              <span className="cadastro">{props.botao}</span>{" "}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
