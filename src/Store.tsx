import React from 'react';
import {Address, Restautrant } from './model/restaurant';


interface OwnProps{
    info: Restautrant,
    changeAddress(address:Address):void;
}

const Store:React.FC<OwnProps> = ({info}) => {

    return(
        <div>{info.name}</div>
    )
}

export default Store;