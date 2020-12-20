import { CircularProgress, FormGroup, IconButton, makeStyles } from '@material-ui/core'
import React from 'react'

import { CustomListItem } from './../ListItem/ListItem'

import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAplicans } from '../../redax/actions/aplicants';

const useStyles = makeStyles((theme) => ({
    listText: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '0.85rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem'
        },
    },
    loader:{
        margin:"10px"
    }
}));

const ListAplicants = ({ ...props }) => {

    const dispatch = useDispatch()
    const classes = useStyles();
    const { onChangeItem } = props
    const { items, newApplicants, isLoaded } = useSelector(({ aplicants }) => aplicants)

    const deteleateAplication = (id) => {
        dispatch(deleteAplicans(id))
    }

    return (
        <div>
            {!isLoaded ?
                <CircularProgress className={classes.loader} />
                : (
                    <FormGroup>
                        {items.map(item => (
                            <CustomListItem
                                key={`${item.id}${item.name}`}
                                color="primary"
                                onChange={onChangeItem}
                                className={classes.listText}
                                item={item}
                            ></CustomListItem>
                        ))}

                        {newApplicants.map(item => {
                            return (
                                <div key={`${item.codeID}${item.name}`}>
                                    <CustomListItem 
                                        color="primary"
                                        onChange={onChangeItem}
                                        className={classes.listText}
                                        item={item}
                                    ></CustomListItem>

                                    <IconButton onClick={() => deteleateAplication(item.codeID)} aria-label="delete" >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </div>
                            )
                        })}
                    </FormGroup>


                )}

        </div>
    )
}


export default ListAplicants;