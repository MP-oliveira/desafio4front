import React from "react";
import "./style.css";

export function Eyes({ className, onClick, ...resto }) {
  return (
    <div className={"olhos " + className} onClick={onClick} {...resto}>
      <img src="/images/eyes.png" alt="Senha Visível" />
    </div>
  );
}

export function ScratchedEyes({ className, onClick, ...resto }) {
  return (
    <div className={"olhos " + className} onClick={onClick} {...resto}>
      <img src="/images/scratchedEyes.png" alt="Senha Invisível" />
    </div>
  );
}
