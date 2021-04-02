import React from 'react';
import styled from 'styled-components';

export const Aside = styled.div`

    max-width: 460px;
    height: 100px;
    margin: auto;
    margin-bottom: 55px;
    background: ${props => props.primary ? "palevioletred" : "blue"};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: sans-serif;
    font-size: 20px;
    transition: .2s ease-in-out;

    &:hover{
        background: green;
    }
`

export const Div = styled.div`

    max-width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 55px;
    background: ${props => props.primary ? "pink" : "red"};
    color:${props => props.primary ? "white " : "black"};
    display:flex;
    align-items: center;
    padding: 10px;
    font-family: sans-serif;
    text-align: center;
    transition: .2s ;

    &:hover{
        background: gray;
    }
`

