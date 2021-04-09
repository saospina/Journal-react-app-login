import { firebase } from '../firebase/firebase-config';
import Swal from 'sweetalert2';

import { login, logoutAction } from '../actions/auth';
import { startLoadingAction, finishLoadingAction } from '../actions/ui';
import { noteLogoutAction } from '../actions/notes';


export const startRegisterWithEmailPassName = (email, password, name) => {

    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                console.log(user);
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => {
                console.error(e);
                Swal.fire('Error!', e.message, 'error')

            })
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
        Swal.fire('Error!', error.message, 'error')
        console.error(error);
    }
};

export const startLogut = () => async (dispatch) => {

    try {
        await firebase.auth().signOut();
        dispatch(logoutAction());
        dispatch(noteLogoutAction())
    } catch (error) {
        console.error(error);
    }
};
