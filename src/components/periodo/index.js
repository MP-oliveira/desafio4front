import * as React from 'react';
import './style.css';
import Imagem from '../../image';
import { RetanguloCard } from '../retangulo';
import ContainerCard from '../cards'

export function Periodo() {
    return (
        <div className="containerPeriodo">
            <div className="periodo">
                <a href="#">Este mês</a>
                <a>Este ano</a>
                <a>Desde o inicio</a>
            </div>
            <hr size="1" width="85%"></hr>
            <div className="card">
                <ContainerCard icone={Imagem.Clientes_logo} titulo="clientes">
                    <RetanguloCard cor="#4EC06E" tipo="Em dia" numero={0} />
                    <RetanguloCard cor="FF4D4D" tipo="Inadimplentes" numero={0} />
                </ContainerCard>
                <ContainerCard icone={Imagem.Cobrancas_logo} titulo="Cobranças">
                    <RetanguloCard cor="#5197B5" tipo="Previstas" numero={0} />
                    <RetanguloCard cor="#FF4D4D" tipo="Vencidas" numero={0} />
                    <RetanguloCard cor="#4EC06E" tipo="Pagas" numero={0} />
                </ContainerCard>
                <div className="cardFaturamento">
                    <ContainerCard icone={Imagem.Faturamento_logo} titulo="Faturamento">
                        <a>Por mês</a>
                        <a>Por dia</a>
                        <hr size="1" width="85%"></hr>
                    </ContainerCard>
                </div>
            </div>
        </div>
    )
};