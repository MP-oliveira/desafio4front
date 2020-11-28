import React from "react";
import { HeaderLight } from "../Header";
import {Link} from "react-router-dom";

export function BodyAuth(props) {
  return (
    <div className="centroLogin">
      <div className="formulario">
        <div className="centroFormulario">
          <HeaderLight />
          {props.children}
        </div>
      </div>
      <div className="rodapeLogin">
        <p className="temConta">
          {props.rodape}
          <Link to={props.link}>{props.botao}</Link>
        </p>
      </div>
    </div>
  );
}
