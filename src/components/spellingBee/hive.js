import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cellFill: {
        cursor: "pointer",
        fill: "#e6e6e6",
        transition: "all 100ms",
    },
    cellLetter: {
        fontWeight: 700,
        fontSize: 30,
        textAnchor: "middle",
        textTransform: "uppercase",
        pointerEvents: "none",
    },
    hive: {
        position: "relative",
        width: "100%",
        paddingBottom: "103.92305%",
        "& svg:nth-child(1)": {
            transform: "translate(0, 0)",
            "& polygon": {
                fill: "#f8cd05",
            },
        },
        "& svg:nth-child(2)": {
            transform: "translate(-75%, -50%)",
        },
        "& svg:nth-child(3)": {
            transform: "translate(0, -100%)",
        },
        "& svg:nth-child(4)": {
            transform: "translate(75%, -50%)",
        },
        "& svg:nth-child(5)": {
            transform: "translate(75%, 50%)",
        },
        "& svg:nth-child(6)": {
            transform: "translate(0, 100%)",
        },
        "& svg:nth-child(7)": {
            transform: "translate(-75%, 50%)",
        },
    },
    hiveCell: {
        position: "absolute",
        top: "calc(100% / 3)",
        left: "30%",
        width: "40%",
        height: "calc(100% / 3)",
    },
    sbControls: {
        width: "90vw",
        maxWidth: 290,
    },
    sbHive: {
        width: "90%",
        margin: "25px auto",
    },
    sbHiveInput: {
        textTransform: "uppercase",
        fontSize: 32,
        fontWeight: 700,
        letterSpacing: 0.5,
        color: theme.palette.common.white,
    },
}));

const HiveCell = (props) => {
    const classes = useStyles();
    const { className, letter } = props;

    return (
        <svg className={classes.hiveCell} viewBox="0 0 120 103.92304845413263">
            <polygon
                className={classes.cellFill}
                points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
                stroke="#282c34"
                stroke-width="7.5"
            />
            <text className={classes.cellLetter} x="50%" y="50%" dy="10.75%">
                {letter}
            </text>
        </svg>
    );
};

const Hive = (props) => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.sbControls}
        >
            <Grid item xs={12} className={classes.sbHiveInput}>
                sb-hive-input
            </Grid>
            <Grid item xs={12} className={classes.sbHive}>
                <div className={classes.hive}>
                    <HiveCell letter="b" />
                    <HiveCell letter="k" />
                    <HiveCell letter="e" />
                    <HiveCell letter="g" />
                    <HiveCell letter="n" />
                    <HiveCell letter="p" />
                    <HiveCell letter="i" />
                </div>
            </Grid>
        </Grid>
    );
};

export default Hive;
