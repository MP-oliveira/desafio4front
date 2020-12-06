import React from 'react';
import './style.css';
import Imagens from '../../image'
import { Link } from "react-router-dom";


export function Sidebar() {
    return(
    <div className="sidebar">
    <img src={Imagens.Logo_cubos} alt="Logo Cubos Academy"/>
    <div className="link"> 
    <a href="/home"><img src={Imagens.Home_logo} alt="Home"/>HOME</a>
    <a href="/cobrancas"><img src={Imagens.Cobrancas_logo} alt="Cobranças"/>COBRANÇAS</a>
    <a href="/clientes"><img src={Imagens.Clientes_logo} alt="Clientes"/>CLIENTES</a>
    </div>
   <Link to="/criar/cobrancas" className="cobranca">Criar cobrança</Link>
</div>
)};