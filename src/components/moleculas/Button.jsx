import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
    margin: 0 auto;
    &:hover {

    }
`;

const Button = ({ text, onClick }) => {
    const theme = useTheme();

    return <StyledButton theme={theme} onClick={onClick}>{text}</StyledButton>;
};

export default Button;