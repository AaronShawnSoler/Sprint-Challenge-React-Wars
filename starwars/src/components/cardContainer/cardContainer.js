import React, {useState, useEffect} from 'react';
import axios from "axios";

import Card from './parts/card';

const CardContainer = (props) => {

    return(
        <div>
            {props.data.results.map((element, index) => <Card obj={element} key={index}/>)}
        </div>
    );
}

export default CardContainer;