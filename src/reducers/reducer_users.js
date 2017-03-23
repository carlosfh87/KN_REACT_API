// import Constants from '../constants/';

export default function ( state = { 'followers': [], 'friends' : []}, action ) {

    console.log("resucer_userS action:", action.users)

    switch(action.type)
    {
        case 'GET_FOLLOWERS':
            return action.users;
            // return {followers:[], friends:[]};
    }

    return state;
}
