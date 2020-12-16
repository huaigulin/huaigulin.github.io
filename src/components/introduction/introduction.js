import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Typography, useMediaQuery } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    background: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: theme.palette.common.white,
        textAlign: "center",
    },
    spacingSm: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    spacingLg: {
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12),
    },
}));

export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div
            className={clsx({
                [classes.background]: true,
                [classes.spacingSm]: isSmScreen,
                [classes.spacingLg]: !isSmScreen,
            })}
        >
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
            <p style={{ display: "flex", alignItems: "center" }}>
                | <ArrowDownwardIcon fontSize="inherit" /> Scroll down to see
                sample projects |
            </p>
        </div>
    );
};
