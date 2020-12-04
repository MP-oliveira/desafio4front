import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import{HeaderLight} from "../Header/"

export function FormularioConfirmaEmail() {
  return (
    <div className="formEsqueciSenha">
      <HeaderLight />

      <button>
        <Link to="/">Ok, entendi</Link>
      </button>
    </div>
  );
}
