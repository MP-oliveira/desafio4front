import React from "react";
import { HeaderLight } from "../Header";

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
        <p className="temConta">{props.rodape}</p>
      </div>
    </div>
  );
}
