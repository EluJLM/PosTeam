import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importa los íconos de ojo

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 90%;
    position: relative; /* Para posicionar el ícono */
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
    padding: 0.5rem;
    border: 2px solid ${({ theme }) => theme.form.inputBorder};
    border-radius: 6px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.form.background};
    color: ${({ theme }) => theme.form.inputText};
    width: 100%; /* Asegura que el input ocupe todo el ancho */
    padding-right: 2.5rem; /* Espacio para el ícono */

    &:focus {
        outline: none;
        font-weight: 600;
        border-color: ${({ theme }) => theme.form.inputBorderfocus};
    }
`;

const EyeIcon = styled.span`
    position: absolute;
    right: 10px;
    top: 55%;
    cursor: pointer;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.form.inputText};
`;

const Input = ({ label, value, type = 'text', name, onChange, onKeyDown, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);

    // Cambia el tipo de input entre "password" y "text"
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputWrapper>
            {label && <Label htmlFor={name}>{label}</Label>}
            <StyledInput
                placeholder={placeholder}
                type={type === 'password' && !showPassword ? 'password' : 'text'} // Cambia el tipo dinámicamente
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            {type === 'password' && (
                <EyeIcon onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Alterna entre los íconos */}
                </EyeIcon>
            )}
        </InputWrapper>
    );
};

export default Input;