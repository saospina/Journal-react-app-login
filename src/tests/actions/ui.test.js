import { setErrorAction } from '../../actions/ui';
import { types } from '../../types/types';


describe('Tests for ui actions', () => {
    test('should all synchronous actions work', () => {
        const action = setErrorAction('Error!!!');
        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Error!!!'
        })
    })

})
