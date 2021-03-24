import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div className="auth__main">
                <div className="auth__box-container">
                    <Switch>
                        <Route
                            path="/auth"
                            component={AuthRouter}
                        />
                        <Route
                            exact
                            path="/"
                            component={JournalScreen}
                        />
                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
