import { firebase } from '../firebase/firebase-config';

import { login, logoutAction } from '../actions/auth';
import { startLoadingAction, finishLoadingAction } from '../actions/ui';


export const startRegisterWithEmailPassName = (email, password, name) => {

    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                console.log(user);
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => console.log(e))
    }

};

export const startLoginEmailPass = (email, password) => async (dispatch) => {
    try {
        dispatch(startLoadingAction());
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        const { user } = response;
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoadingAction());
    } catch (error) {
        dispatch(finishLoadingAction());
        console.log(error);
    }
};

export const startLogut = () => async (dispatch) => {

    try {
        await firebase.auth().signOut();
        dispatch(logoutAction());
    } catch (error) {
        console.log(error);
    }
};
