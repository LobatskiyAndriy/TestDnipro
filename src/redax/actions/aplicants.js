
export const setAplicans = (item) => ({
    type: 'SET_APLICANTS',
    payload: item,
})
export const changeSelectedAplicans = (item) => ({
    type: 'CHANGE_SELECTED_APLICANTS',
    payload: item,
})

export const requestAplicans = id => (
    (dispatch, getState, Api) => {

        Api.getClientApplicants(id)
            .then((results) => {
                let tempArray = [];
                tempArray = results.data.items.map(item => {
                    return ({
                        ...item,
                        selected: false,
                        disable: false,
                    })
                })

                dispatch(setAplicans(tempArray));
                return tempArray;
            })
    }
)

export const addAplicans = (item) => ({
    type: 'ADD_APLICANT',
    payload: item,
})
export const deleteAplicans = (item) => ({
    type: 'DELETE_APLICANT',
    payload: item,
})