import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default (props) => {

    return (
        <div>
            <FamiliaMembro nome="Letícia" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Luis" {...props}/>
            <FamiliaMembro nome="Henrique" sobrenome="Lima" />
        </div>
    )
}