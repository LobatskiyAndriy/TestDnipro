import React from 'react'

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { withClientsChange } from './ClientsChangeHOC';
import { SmalInfoUser } from '../SmalInfoUser/SmalInfoUser';
import { useSelector } from 'react-redux';

export const ClientsChange = ({ ...props }) => {
    const { handleInputChange, showOptions, activeClient, options, loading, onChange } = props;

    const { activeUser } = useSelector(({ users }) => users)

    return (
        <div >
            <Autocomplete
                loading={loading}
                getOptionLabel={(option) => option.label}
                noOptionsText={showOptions ? 'Нічого не знайдено' : 'Ведіть більше трьох символів'}
                loadingText="Пошук клієнтів ...."
                renderInput={(params) => <TextField {...params} onChange={handleInputChange} label="Custom Search/Sections" margin="normal" />}
                options={options}
                onChange={onChange}
            />

            {!!activeUser && (
                <SmalInfoUser name={activeClient.name} phone={activeClient.phone} adrrees={activeClient.email}></SmalInfoUser>
            )}
        </div>
    )
}

export default withClientsChange(ClientsChange);
