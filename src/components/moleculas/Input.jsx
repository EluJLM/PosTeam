import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importa los íconos de ojo

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;

const Label = styled.label`
    font-weight: 600;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center; /* Centra verticalmente */
    position: relative; /* Para posicionar el ícono */
    width: 100%; /* Ocupa todo el ancho disponible */
`;

const StyledInput = styled.input`
    padding: 0.5rem;
    border: 2px solid ${({ theme }) => theme.form.inputBorder};
    border-radius: 6px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.form.background};
    color: ${({ theme }) => theme.form.inputText};
    width: 100%;
    padding-right: 2.5rem;
    margin-bottom: 1rem;
    &:focus {
        outline: none;
        font-weight: 600;
        border-color: ${({ theme }) => theme.form.inputBorderfocus};
    }
`;

const EyeIcon = styled.span`
    position: absolute;
    right: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    top: 10px;
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
            <InputContainer>
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
            </InputContainer>
        </InputWrapper>
    );
};

export default Input;