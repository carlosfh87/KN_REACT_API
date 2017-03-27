import * as types from '../actions/types';

export default function ( state = null, action ) {

    switch(action.type)
    {
        case types.USER_SELECTED:
            return action.payload;
    }

    return state;
}
