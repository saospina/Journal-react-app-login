import { types } from '../../types/types';
import { authReducer } from '../../reducers/authReducer';


describe('Tests for auth reducer', () => {
    test('should return uid and name when login', () => {

        const newLogin = {};
        const action = {
            type: types.login,
            payload: {
                uid: '2134241',
                displayName: 'anthony'
            }
        };
        const state = authReducer(newLogin, action)
        expect(state).toEqual({
            uid: '2134241',
            name: 'anthony'
        })
    });

    test('should logout', () => {

        const action = {type:types.logout}
        const state = authReducer({}, action)
        expect(state).toEqual({})
        
    });
    

})
