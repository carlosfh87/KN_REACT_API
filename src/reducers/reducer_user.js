export default function ( state = null, action ) {

    console.log("reducer_user action:", action)

    switch(action.type)
    {
        case 'USER_SELECTED':
            return action.user;
    }

    return state;
}
