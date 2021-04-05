import { firebase, googleAuthPrivider } from '../firebase/firebase-config';
import { types } from '../types/types';


export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: { uid, displayName }
    }
);

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthPrivider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
};

export const logoutAction = () => ({
    type: types.logout
})


