import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { reducer as formReducer } from 'redux-form';

export default function createReducer(asyncReducers) {
    return combineReducers({
        router: routerReducer,
        form: (state = fromJS({}), action) => fromJS(formReducer(state.toJS(), action)),
        ...asyncReducers,
    });
}
