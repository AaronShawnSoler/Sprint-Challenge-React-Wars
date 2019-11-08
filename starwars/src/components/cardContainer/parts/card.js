import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    padding: 32px;
    background: #222;
    color: #fff;
    width 25%;
    margin: 0 auto;
    margin-bottom: 32px;
    border: 5px solid orange;
`;

const Card = (props) => {
    return(
    <Styles>
        <h1>{props.obj.name}</h1>
        <p>Height: {props.obj.height}</p>
        <p>Mass: {props.obj.mass}</p>
        <p>Birth Year: {props.obj.birth_year}</p>
    </Styles>     
    );
}

export default Card;