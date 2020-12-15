import { Checkbox, FormControlLabel, FormGroup, IconButton, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import Api from '../../Api'

import DeleteIcon from '@material-ui/icons/Delete';
 
const useStyles = makeStyles((theme) => ({
    listText: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '0.85rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem'
        },
    },
}));

export const ListAplicants = ({ ...props }) => {

    const classes = useStyles();

    const { dataForm, setDataForm } = props;
    const [aplicants, setAplicants] = useState([]);

    useEffect(() => {
        if (!!dataForm.clienId) {

            Promise.all([
                Api.getClientApplicants(dataForm.clienId),
            ]).then((results) => {
                setAplicants(results[0].data.items);
            });
        }
    }, [dataForm.clienId])

    const onChangeItem = (e) => {
        if (e.target.checked) {
            let tempArray = dataForm.applicantsIds;
            tempArray.push(String(e.target.value));
            setDataForm({
                ...dataForm,
                applicantsIds: tempArray
            })
        } else {
            let tempArray = dataForm.applicantsIds;
            const index = tempArray.indexOf(e.target.value);
            if (index > -1) {
                tempArray.splice(index, 1);
            }
            setDataForm({
                ...dataForm,
                applicantsIds: tempArray
            })
        }
    }

    const deteleateAplication = (id) => {
        let tempArray = [];
        tempArray = dataForm.newApplicants.filter(item => {
            return item.codeID !== id
        })

        setDataForm({
            ...dataForm,
            newApplicants: tempArray
        })

    }

    return (
        <div>
            <FormGroup>
                {aplicants.map(item => (
                    <FormControlLabel key={`${item.id}${item.name}`}
                        control={<Checkbox value={item.id} color="primary" onChange={onChangeItem} />}
                        label={<Typography className={classes.listText} > <b>{item.name},</b>  {item.address.address}</Typography>}
                    />
                ))}
                {!!dataForm && !!dataForm.newApplicants && dataForm.newApplicants.map(item => {
 
                    return (
                        <div>
                            <FormControlLabel key={`${item.codeID}${item.name}`} disabled
                                control={<Checkbox checked={true} value={item.codeId} color="primary" onChange={onChangeItem} />}
                                label={<Typography className={classes.listText} > <b>{item.name},</b>  {item.originalName}</Typography>}
                            />

                            <IconButton onClick={() => deteleateAplication(item.codeID)} aria-label="delete" >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </div>
                    )
                })}
            </FormGroup>
        </div>
    )
}

