import * as R from 'ramda'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAplicans } from '../../redax/actions/aplicants';
import { selectUser } from '../../redax/actions/users';

export const withClientsChange = Component => ({ ...props }) => {

    const dispatch = useDispatch()
    const { items, isLoaded } = useSelector(({ users }) => users)

    const [showOptions, setShowOptions] = useState(false)
    const [activeClient, setActiveClient] = useState();


    function handleInputChange(event) {
        const querySearch = event.target.value;
        if (querySearch.length > 2) {
            setShowOptions(true);
        }
    }

    function onChangeClient(event, newValue) {
        if (!!newValue) {

            let userInfo = R.find(R.propEq('id', newValue.id))(items);
            setActiveClient(userInfo);

            dispatch(selectUser(newValue.id))
            dispatch(requestAplicans(newValue.id))

        } else {
            dispatch(selectUser(''))
            setActiveClient();
        }
    }

    return (<Component
        loading={!isLoaded}
        options={showOptions ? items : []}
        showOptions={showOptions}
        activeClient={activeClient}
        handleInputChange={handleInputChange}
        onChange={onChangeClient}
        {...props} />)

};