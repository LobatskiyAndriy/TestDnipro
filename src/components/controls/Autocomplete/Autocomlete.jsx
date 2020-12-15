import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';

import { Field } from 'formik';

import React from 'react'

export const Autocomlete = (props) => {
    const { name, id, options, getOptionLabel, noOptionsText, variant, ...other } = props;
   
    return (
        <Field
            id={id}
            name={name}
            render={({ field, form, meta }) => {

                return (
                    <>
                        <Autocomplete
                            {...other}
                            options={options}
                            getOptionLabel={getOptionLabel}
                            noOptionsText={noOptionsText}
                            onChange={(e, value) => {
                                form.setFieldValue(name, !!value && !!value.value ? value.value : '')
                            }}
                            renderInput={params => (
                                <Field component={TextField} label="Вибір країни "  {...params} variant={variant} {...(meta.touched && meta.error && { error: true, helperText: meta.error })} />
                            )}
                        />
                    </>
                )
            }}

        />


    )
}


