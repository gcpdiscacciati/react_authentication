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

export const Paragraph = styled.h2`

`;

export const Text = styled.h3`
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