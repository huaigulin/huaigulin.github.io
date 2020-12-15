import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    background: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: theme.palette.common.white,
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12),
        textAlign: "center",
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <h1>Huaigu Lin</h1>
            <h3>
                <i>Not your ordinary full-stack engineer.</i>
            </h3>
            <p>
                I write frontend, backend and mobile applications with React,
                Node.js, Java and SQL.
            </p>
            <p>
                More importantly, I'm a strong problem-solver who cares about
                user experience and design.
            </p>
        </div>
    );
};
