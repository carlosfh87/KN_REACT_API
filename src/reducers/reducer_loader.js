import * as types from '../actions/types';

export default function ( state = false, action ) {

    switch(action.type)
    {
        case types.SHOW_LOADER:
            return action.payload;
    }

    return state;
}
