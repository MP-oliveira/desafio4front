import * as React from 'react';
import './style.css';

function SecaoPrincipal(props) {
    const { titulo, icone, children } = props;
    return (
        <div className="containerCard">
            <div className="cabecalho">
                <img src={icone} alt={titulo} />
                {titulo}
            </div>
            <div className="conteudoCard">{children}</div>
        </div>
    )
}
export default SecaoPrincipal