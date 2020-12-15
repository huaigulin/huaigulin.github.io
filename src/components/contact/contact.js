import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    background: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    },
});

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <h1>Get in Touch</h1>
            <p>Contact info (Waiting to update)</p>
        </div>
    );
};
