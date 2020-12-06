import * as React from 'react';
import './style.css';

export function RetanguloCard (props){
    const {cor, tipo, numero} = props;
    return(
        <div className={`retanguloCor`} style={{color:cor, borderColor:cor}}>
            <span className="tipo">{tipo}</span>
            <span className="numero">{numero}</span>
        </div>
    )
}

