const initialState = {
    items: [],
    newApplicants: [],
    isLoaded: false,
}


const aplicants = (state = initialState, actions) => {

    if (actions.type === 'SET_APLICANTS') {
        return {
            ...state,
            items: actions.payload,
            isLoaded: true,
        }
    } else if (actions.type === 'CHANGE_SELECTED_APLICANTS') {
        let aplicantIndex = state.items.findIndex(item => item.id === actions.payload);;
        let tempArray = [...state.items];
        tempArray[aplicantIndex].selected = !tempArray[aplicantIndex].selected

        return {
            ...state,
            items: tempArray,
        }
    } else if (actions.type === 'ADD_APLICANT') {

        const aplicant = actions.payload;
        let tempArray = [...state.newApplicants];
        tempArray.push(aplicant);
        return {
            ...state,
            newApplicants: tempArray,
        }
    } else if (actions.type === 'DELETE_APLICANT') {

        let tempArray = [];
        tempArray = state.newApplicants.filter(item => {
            return item.codeID !== actions.payload
        })

        return {
            ...state,
            newApplicants: tempArray,
        }
    }

    return state;

}

export default aplicants;
