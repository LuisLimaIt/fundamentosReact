import React from 'react';

export default function Fragmento(props) {
    return (
        // <React.Fragment key="1">
        // Quando utilizamos o React.Fragmanet podemos adicionar propriedades,
        // como no exemplo acima onde o fragmente recebe a prop key.
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
        // </React.Fragment>
    );
}