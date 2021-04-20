import React from 'react';
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Henrique" idade={21} nerd={true} />
            <DiretaFilho nome="Letícia" idade={17} nerd={false} />
        </div>
    );
}