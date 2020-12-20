import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { changeSelectedAplicans } from '../../redax/actions/aplicants';

export const CustomListItem = ({ ...props }) => {

    const { key, value, color, className, item } = props;
    const dispatch = useDispatch()
    const onChange = (id) => {
        dispatch(changeSelectedAplicans(id));
    }

    return (
        <FormControlLabel key={key} disabled={item.disable}
            control={<Checkbox checked={item.selected} value={value} color={color} onChange={() => onChange(item.id)} />}
            label={<Typography className={className} > <b>{item.name},</b> {item.address.address}</Typography>}
        />
    )
}

