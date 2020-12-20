
const entryLoaded = users => ({ type: 'SET_USERS', payload: users })

export const requestUsers = () => {
    return (dispatch, getState, Api) => {
        Api.getClients()
            .then(data => {

                let tempArray = [];
                tempArray = data.data.items.map((item) => {
                    return {
                        ...item,
                        value: item.id
                    }
                })

                dispatch(entryLoaded(tempArray));
                return tempArray;
            })
    }
}

export const selectUser = userID => ({ type: 'SELECT_USERS', payload: userID })
