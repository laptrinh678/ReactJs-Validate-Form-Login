import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-bottom: 1px solid #eee;
    font-size: 25px;
  font-weight:bold;
  text-align: center;
`

const Title = ({
    title
}) => (
        <Wrapper>{title}</Wrapper>
    )

export default Title;