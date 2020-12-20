import { Grid, makeStyles, Typography } from '@material-ui/core'

import React from 'react'
import Controls from './../../components/controls';
import { Country } from './listCountry.js'

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import uuid from "react-uuid";
import { nameErrors, typeUser } from './const';
import { useDispatch } from 'react-redux';
import { addAplicans } from '../../redax/actions/aplicants';


const initialValues = {
    code: "Individual",
    country: "",
    EDRPOU: "",
    name: "",
    address: "",
    originalName: "",
    originalAddress: "",
}


const validChem = Yup.object({
    code: Yup.string().required(nameErrors.code),
    country: Yup.string().required(nameErrors.country),
    name: Yup.string().required(nameErrors.name),
    address: Yup.string().required(nameErrors.address),
    originalAddress: Yup
        .string()
        .when("country", {
            is: "Ukraine",
            then: "",
            otherwise: Yup.string().required(nameErrors.originalAddress)
        }),

    originalName: Yup
        .string()
        .when("country", {
            is: "Ukraine",
            then: "",
            otherwise: Yup.string().required(nameErrors.originalAddress)
        }),
})

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: 10,
        marginBottom: 20,
        '& .MuiAutocomplete-root': {
            maxWidth: 400
        }
    },

    inputBox: {
        maxWidth: "90%",
        width: "100%",
        marginTop: 5,
        marginBottom: 5,

        [theme.breakpoints.down('sm')]: {
            maxWidth: "100%",
        },
    }
}));


export const FormUser = ({ ...props }) => {
    const classes = useStyles()
    const { values } = props;

    return (
        <Form>
            <Controls.RadioGroup
                row
                id="code"
                name="code"
                items={typeUser}

            ></Controls.RadioGroup>
            <Controls.Autocomlete
                className={classes.wrapSelect}
                id="country"
                name="country"
                options={Country}
                getOptionLabel={(Country) => Country.title}
                noOptionsText={'Ведіть країну'}
                variant="standard"
            ></Controls.Autocomlete>
            <Grid container >
                <Grid item xs={12} md={6}>
                    <Controls.Input
                        className={classes.inputBox}
                        id="EDRPOU"
                        label="ЕДРПОУ"
                        variant="standard"
                        name="EDRPOU"
                    ></Controls.Input>
                    <Controls.Input
                        className={classes.inputBox}
                        id="name"
                        label="Назва"
                        variant="standard"
                        name="name"
                    ></Controls.Input>
                    <Controls.Input
                        className={classes.inputBox}
                        id="address"
                        label="Адреса"
                        variant="standard"
                        name="address"
                    ></Controls.Input>
                </Grid>

                {!!values.country && values.country !== "Ukraine" && (
                    <Grid item xs={12} md={6}>
                        <Controls.Input
                            className={classes.inputBox}
                            label="Назва мови походження"
                            variant="standard"
                            name="originalName"
                        ></Controls.Input>
                        <Controls.Input
                            className={classes.inputBox}
                            label="Адреса мовою походження"
                            variant="standard"
                            name="originalAddress"
                        ></Controls.Input>
                    </Grid>
                )}
            </Grid>

            <Controls.Button
                type="submit"
                variant="outlined"
                color="primary"
            > Додати заявника</Controls.Button>
        </Form>

    )
}

export const AddFormAplicants = (props) => {
    const classes = useStyles()
    const { setShowAddForm } = props;

    const dispatch = useDispatch()

    return (
        <div className={classes.form} >
            <Typography variant="h6">Додати нового</Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validChem}
                onSubmit={(values, { setSubmitting }) => {
                    values.codeID = uuid();
                    values.selected = true;
                    values.disable = true;
                    dispatch(addAplicans(values));
                    setShowAddForm(false);
                }}
                children={FormUser}

            >
            </Formik>

        </div>
    )
}



