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
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <h1>Huaigu Lin</h1>
            <p>Not your ordinary full-stack engineer.</p>
        </div>
    );
};
