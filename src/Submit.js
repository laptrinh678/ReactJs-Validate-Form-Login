import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    max-width: 150px;
    min-width:120px;
    height: 28px;
    padding: 4px 8px;
    box-sizing: border-box;
    background: #ccc;
    border-radius: 5px;
    margin: 24px auto 0 auto;
    cursor: pointer;
`

const Submit = ({
    onClick,
    name
}) => (
    <Wrapper onClick={onClick}>{name}</Wrapper>
);

export default Submit;