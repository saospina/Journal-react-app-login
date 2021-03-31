import { firebase } from '../firebase/firebase-config';

import { login } from '../actions/auth';


export const startRegisterWithEmailPassName = (email, password, name) => {

    console.log('thunk');
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                console.log(user);
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => console.log(e))
    }

}