import styled from 'styled-components';

export const Main = styled.div`
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    position: absolute;
    top: 20%;
    left: calc(50% - 250px);
    width: 500px;
`;

export const PageTitle = styled.h1`
    font-size: 30px;
`;

export const SmallerTitle = styled.h2`
    font-size: 18px;
`;

export const Form = styled.form`
    border: 2px #AAA solid;
    border-radius: 10px;
    padding: 5px;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    display: table;
`;

export const Paragraph = styled.p`
    display: table-row;
`;

export const Label = styled.label`
    display: table-cell;
    text-align: right;
    padding-right: 45px;
    padding-top: 5px;
`
export const TextField = styled.input`
    display: table-cell;
    font-size: 14px;
`;

export const Button = styled.input`
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 5px;
    background-color: #ccc;
    border: none;
    border-radius: 8px;
    color: black;
    padding: 10px;
    text-decoration: none;
    &:hover{
        background-color: black;
        color: white;
    }

`;

export const Link = styled.a`
    display: block;
    cursor: pointer;
    font-size: 14px;
    margin-top: 5px;
    color: #ddd;
    text-decoration: none;
    &:hover{
        color: black;
        text-decoration: underline;
    }

`;