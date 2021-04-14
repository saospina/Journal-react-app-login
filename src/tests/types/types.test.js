import { types } from '../../types/types';


const typesTest = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',

    uiSetError: '[UI] Set error',
    uiRemoveError: '[UI] Remove error',

    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    notesAddNewEntry: '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated: '[Notes] Updated note',
    notesDelete: '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout cleaning'
}

describe('Testing types for actions', () => {
    test('should include all types', () => {
        expect(types).toEqual(typesTest)
    })
    
})
