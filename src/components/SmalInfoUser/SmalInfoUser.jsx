import React from 'react'
import propTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    title:{
        fontWeight:'bold'
    }   
}));

export const SmalInfoUser = (Props) => {
    const classes = useStyles();

    const {name,phone} = Props;
    return (
        <div  >
            <Typography className={classes.title} component="h6">{name}</Typography>
            <Typography>Телефон: {phone}</Typography>
        </div>
    )
}

SmalInfoUser.defaultProps = {
    name: "Назва тестова",
    phone: "Телефон. 0000000000",
};

SmalInfoUser.propTypes = {
    name: propTypes.string,
    phone: propTypes.string,
}