import {   TextField } from '@material-ui/core'
import { useField } from 'formik';
import React from 'react'

 

export const Input = ({  ...props }) => {
    const [field, meta] = useField(props);
    
    return (
        <TextField
       
            {...props}
            {...field}
            {...(meta.touched && meta.error && { error: true, helperText: meta.error })}
        >
        </TextField >
    )
}


