import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup as MuiRadioGroup, Radio } from '@material-ui/core';
import { useField } from 'formik';


export const RadioGroup = (Props) => {

    // const { name, label, onChange, items } = props;
    const [field, meta] = useField(Props);
     
    const { label, items } = Props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup  {...field} {...Props}  >
                {
                    items.map(
                        (item) => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio color="primary" />} label={item.title} />
                        )
                    )
                }

            </MuiRadioGroup>
            {meta.touched && meta.error && (
                <React.Fragment>{meta.error}</React.Fragment>
            )}

        </FormControl>
    )
}


// const MyCheckbox = ({ children, ...props }) => {
//     // React treats radios and checkbox inputs differently other input types, select, and textarea.
//     // Formik does this too! When you specify `type` to useField(), it will
//     // return the correct bag of props for you
//     const [field, meta] = useField({ ...props, type: 'checkbox' });
//     return (
//         <div>
//             <label className="checkbox">
//                 <input type="checkbox" {...field} {...props} />
//                 {children}
//             </label>

//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </div>
//     );
// };

// const FormikRadioGroup = ({
//     field,
//     form: { touched, errors },
//     name,
//     options,
//     ...props
// }) => {

//     return (
//         <React.Fragment>
//             <RadioGroup {...field} {...props} name={name}>
//                 {options.map(option => (
//                     <FormControlLabel value={option} control={<Radio />} label={option} />
//                 ))}
//             </RadioGroup>

//             {touched[fieldName] && errors[fieldName] && (
//                 <React.Fragment>{errors[fieldName]}</React.Fragment>
//             )}
//         </React.Fragment>
//     );
// };