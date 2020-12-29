import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, TextField, Typography, useMediaQuery } from "@material-ui/core";

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
        outline: "none",
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
    const { className, isCenter, tabIndex } = props;
    const [focus, setFoucs] = useState(false);
    const [letter, setLetter] = useState(null);

    useEffect(() => {
        if (focus) {
            const handleKeyDown = (e) => {
                if (e.code.startsWith("Key")) {
                    setLetter(e.code.slice(3));
                } else if (e.code === "Backspace") {
                    setLetter(null);
                }
            };
            document.addEventListener("keydown", handleKeyDown);

            return function cleanup() {
                document.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [focus]);

    return (
        <svg
            className={classes.hiveCell}
            viewBox="0 0 120 103.92304845413263"
            tabIndex={tabIndex}
            onFocus={() => {
                setFoucs(true);
            }}
            onBlur={() => {
                setFoucs(false);
            }}
        >
            <polygon
                className={classes.cellFill}
                points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
                stroke="#282c34"
                stroke-width="7.5"
            />
            <text className={classes.cellLetter} x="50%" y="50%" dy="10.75%">
                {letter}
            </text>
            {focus && (
                <line
                    strokeWidth="3"
                    x1={letter ? "75" : "50"}
                    y1="25"
                    x2={letter ? "75" : "50"}
                    y2="75"
                    stroke={isCenter ? "black" : "#f8cd05"}
                >
                    <animate
                        attributeName="display"
                        from="block"
                        to="none"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </line>
            )}
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
            <Grid item xs={12} className={classes.sbHive}>
                <div className={classes.hive}>
                    <HiveCell isCenter tabIndex="1" />
                    <HiveCell tabIndex="2" />
                    <HiveCell tabIndex="3" />
                    <HiveCell tabIndex="4" />
                    <HiveCell tabIndex="5" />
                    <HiveCell tabIndex="6" />
                    <HiveCell tabIndex="7" />
                </div>
            </Grid>
        </Grid>
    );
};

export default Hive;
