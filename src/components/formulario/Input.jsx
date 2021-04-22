import './Input.css'
import React, { useState } from 'react';

export default (props) => {
    const [valor, setValor] = useState('inicial')

    function quandoMudar(e){
        setValor(e.target.value);
    };

    return(
        <div>
            <h1>{valor}</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input 
                    className="input" 
                    value={valor} 
                    onChange={quandoMudar}
                />
                <input 
                    className="input" 
                    value={valor} 
                />
                <input className="input" value={undefined} />
            </div>
        </div>
    );
};