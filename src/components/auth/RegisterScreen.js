import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

const registerValues = {
    name: 'sergio',
    email: 'se@yo.com',
    password: '123456',
    password2: '123456'
}

export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm(registerValues)
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, password2);
    }

    return (
        <div>
            <h3 className="auth__title">Register Screen</h3>
            <form onSubmit={handleRegister}>
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    autoComplete="off"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Login
            </button>
                <hr className="auth__line mb-5" />
                <Link
                    className="link"
                    to="/auth/login">
                    Login
            </Link>
            </form>
        </div>

    )
}
