// services/useAuth.js
import { useState } from 'react';
import AuthService from '../services/AuthService';

const useAuth = () => {
    const [resetPasswordMessage, setResetPasswordMessage] = useState('');

    const login = async (email, contraseña) => {
        try {
            await AuthService.login(email, contraseña);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    const register = async (nombre, genero, email, contraseña, edad) => {
        try {
            await AuthService.register(nombre, genero, email, contraseña, edad);
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    const handleResetPassword = async (email) => {
        try {
            await AuthService.resetPassword(email);
            setResetPasswordMessage('Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.');
        } catch (error) {
            console.error('Error al solicitar restablecimiento de contraseña:', error);
            setResetPasswordMessage('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
        }
    };

    return {
        resetPasswordMessage,
        login,
        register,
        handleResetPassword
    };
};

export default useAuth;
