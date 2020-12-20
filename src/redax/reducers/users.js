const initialState = {
    items: [],
    activeUser: '',
    isLoaded: false,
}


const users = (state = initialState, actions) => {
 
    if (actions.type === 'SET_USERS') {
        return {
            ...state,
            items: actions.payload,
            isLoaded: true,
        }
    } else if (actions.type === 'SELECT_USERS') {
        return {
            ...state,
            activeUser: actions.payload,
        }
    }

    return state;

}

export default users;