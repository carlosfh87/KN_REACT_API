import * as types from '../actions/types';

export default function ( state = { 'followers': [], 'friends' : []}, action ) {

    switch(action.type)
    {
        case types.GET_FOLLOWERS:
            return action.payload.data;
    }

    return state;
}
