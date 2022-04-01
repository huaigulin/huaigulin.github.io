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
            <h1>
                <span
                    style={{
                        fontFamily: "semplicitapro, sans-serif",
                        fontWeight: 700,
                        fontStyle: "italic",
                    }}
                >
                    Kevin
                </span>{" "}
                <span
                    style={{
                        fontFamily: "recherche, sans-serif",
                        fontWeight: 400,
                        fontStyle: "normal",
                    }}
                >
                    (Huaigu)
                </span>{" "}
                <span
                    style={{
                        fontFamily: "expo-serif-pro, serif",
                        fontWeight: 700,
                        fontStyle: "italic",
                    }}
                >
                    Lin
                </span>
            </h1>
            <h3
                style={{
                    fontFamily: "expo-serif-pro, serif",
                    fontWeight: 700,
                    fontStyle: "italic",
                }}
            >
                Creative technologist, designer, full-stack engineer.
            </h3>
            {/* <p
                style={{
                    fontFamily: "semplicitapro, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                }}
            >
                I create frontend, backend and mobile applications with React,
                Node.js, Java, SQL and MongoDB. More importantly, I'm a strong
                problem-solver who cares about user experience and design.
            </p> */}
            <p
                style={{
                    fontFamily: "semplicitapro, sans-serif",
                    fontWeight: 700,
                    fontStyle: "italic",
                }}
            >
                Currently, I'm a student of the MFA Design and Technology
                program at Parsons School of Design.
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
                <ArrowDownwardIcon fontSize='inherit' /> Scroll down to see a
                couple of my projects.
            </p>
        </div>
    );
};
