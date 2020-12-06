import * as React from 'react';
import { Periodo } from '../../components/periodo';
import { Header } from '../../components/headerSaldo';

export default function Home(){
    return(
        <>
        <div className="headerHome">
        <Header/>
        <Periodo/>
        </div>
        
    </>
    )
}