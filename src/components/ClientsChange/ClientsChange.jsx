import {   TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useEffect, useState } from 'react'
import Api from './../../Api'
import * as R from 'ramda'
import { SmalInfoUser } from '../SmalInfoUser/SmalInfoUser';





export const ClientsChange = ({ ...props }) => {

    const { initialStateForm, dataForm, setDataForm } = props;

    const [showOptions, setShowOptions] = useState(false)
    const [clients, setClients] = useState()

    const [activeClient, setActiveClient] = useState();

    useEffect(() => {
        Promise.all([
            Api.getClients(),
        ]).then((results) => {
            let tempArray = []
            tempArray = results[0].data.items.map((item) => {
                return {
                    ...item,
                    value: item.id
                }
            })
            setClients(tempArray);
        });
    }, [])


    function handleInputChange(event) {
        const querySearch = event.target.value;
        if (querySearch.length > 2) {
            setShowOptions(true);
        }
    }

    function onChangeClient(event, newValue) {

        if (!!newValue) {

            setDataForm({
                applicantsIds: [],
                newApplicants: [],
                clienId: newValue.id,
            })
            let userInfo = R.find(R.propEq('id', newValue.id))(clients);
            setActiveClient(userInfo);
        } else {
            setDataForm(initialStateForm)
            setActiveClient();
        }

    }
    return (
        <div >
            <Autocomplete
                options={showOptions ? clients : []}
                getOptionLabel={(option) => option.label}
                noOptionsText={showOptions ? 'Нічого не знайдено' : 'Ведіть більше трьох символів'}
                onChange={onChangeClient}
                renderInput={(params) => <TextField {...params} onChange={handleInputChange} label="Custom Search/Sections" margin="normal" />}
            />

            {!!dataForm.clienId && (
                <SmalInfoUser name={activeClient.name} phone={activeClient.phone} adrrees={activeClient.email}></SmalInfoUser>
            )}

        </div>
    )
}
