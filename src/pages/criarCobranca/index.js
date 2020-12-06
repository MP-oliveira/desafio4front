import * as React from 'react';
import './style.css';
import Input from '../../components/input';

export default function CriarCobranca() {
    return (
        <>
            <div className="containerCobranca">
                <div className="conteudo">
                    <label>Cliente</label>
                    <select>
                        <option value="Larissa" >Larissa</option>
                        <option value="Ale" >Ale</option>
                    </select>
                    <label for="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" rows="3" cols="56"
                        placeholder="Referente ao pagamento da compra online.">
                    </textarea>
                    <span>A descrição informada será impressa no boleto.</span>
                    <Input title="Valor" tipo="number" descricao="R$ 0,00" />
                    <Input title="Vencimento" tipo="date" descricao="18/12/2020" />
                </div>
            </div>
        </>
    )
}