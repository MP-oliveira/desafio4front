import * as React from 'react';
import './style.css';

export default function Input(props) {
    const { title, tipo, descricao } = props;
    return (
        <>
            <span>{title}</span>
            <label><input type={tipo} placeholder={descricao} /></label>
        </>
    )
}