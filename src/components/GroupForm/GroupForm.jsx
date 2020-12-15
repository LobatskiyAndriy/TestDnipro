import { makeStyles, Paper } from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(2),
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
        },

        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4),
            margin: theme.spacing(4),
        },
    },
    title: {
        margin:0,
        marginBottom:5
    }
}));

export const GroupForm = (Props) => {
    const classes = useStyles();

    const { children, title } = Props;
    return (
        <Paper className={classes.root} >
            <h2 className={classes.title}>{title}</h2>
            <div>{children}</div>
        </Paper>
    )
}

GroupForm.defaultProps = {
    title: "Назва тестова",
};

GroupForm.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
}