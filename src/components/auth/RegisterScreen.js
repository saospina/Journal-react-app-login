import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div>
            <h3 className="auth__title">Register Screen</h3>
            <form action="">
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                />
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    autoComplete="off"
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
