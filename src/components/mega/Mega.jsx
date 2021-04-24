import React, { useState } from 'react';
import gerarNumeros from './gerarNumeros';

export default props => {

    const [num, setNum] = useState(6);


    const gerarNumeros = qtde => {
        const jogoPronto = [];
    
        for(let i = 0; i < qtde; i++){
            const numAleatorio = parseInt(Math.random() * (60 - 1) + 1);
            jogoPronto.push(numAleatorio)
        }
        return jogoPronto;
    }

    const handleChange = e => {
        setNum(e.target.value);
    } 
    

    return (
        <div>
            <h2>Números gerados: {gerarNumeros(7).map(numero => numero + " ")}</h2>
            <label htmlFor="qtdeNum">Qtde de Números: </label>
            <input 
                id="qtdeNum" 
                type="number" 
                value={num} 
                onChange={handleChange}/>
        </div>
    )
}
