import React, { useState, useEffect, Fragment, useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
    Backdrop,
    Button,
    ClickAwayListener,
    Grid,
    Tooltip,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
import { OpenInNew as OpenInNewIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.common.black,
    },
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
        "& div:nth-child(1)": {
            transform: "translate(0, 0)",
            "& polygon": {
                fill: "#f8cd05",
            },
        },
        "& div:nth-child(2)": {
            transform: "translate(-75%, -50%)",
        },
        "& div:nth-child(3)": {
            transform: "translate(0, -100%)",
        },
        "& div:nth-child(4)": {
            transform: "translate(75%, -50%)",
        },
        "& div:nth-child(5)": {
            transform: "translate(75%, 50%)",
        },
        "& div:nth-child(6)": {
            transform: "translate(0, 100%)",
        },
        "& div:nth-child(7)": {
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
    tooltip: {
        fontSize: 16,
    },
}));

const HiveCell = (props) => {
    const classes = useStyles();
    const { className, isCenter, tabIndex, letter, setLetter } = props;
    const [focus, setFoucs] = useState(false);

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
        <div
            onFocus={() => {
                setFoucs(true);
            }}
            onBlur={() => {
                setFoucs(false);
            }}
            className={classes.hiveCell}
            tabIndex={tabIndex}
        >
            {focus && (
                <input
                    type="text"
                    autoFocus
                    style={{
                        position: "absolute",
                        height: 0,
                        padding: "unset",
                        margin: "unset",
                        border: "none",
                    }}
                />
            )}
            <svg viewBox="0 0 120 103.92304845413263">
                <polygon
                    className={classes.cellFill}
                    points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"
                    stroke="#282c34"
                    stroke-width="7.5"
                />
                <text
                    className={classes.cellLetter}
                    x="50%"
                    y="50%"
                    dy="10.75%"
                >
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
        </div>
    );
};

const Hive = (props) => {
    const { setResult } = props;
    const classes = useStyles();
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [letter1, setLetter1] = useState(null);
    const [letter2, setLetter2] = useState(null);
    const [letter3, setLetter3] = useState(null);
    const [letter4, setLetter4] = useState(null);
    const [letter5, setLetter5] = useState(null);
    const [letter6, setLetter6] = useState(null);
    const [letter7, setLetter7] = useState(null);
    const [solving, setSolving] = useState(false);

    const handleTooltipClose = () => {
        setTooltipOpen(false);
    };

    const handleTooltipOpen = () => {
        setTooltipOpen(true);
    };

    return (
        <Grid
            container
            // direction="column"
            justify="center"
            alignItems="center"
            className={classes.sbControls}
            spacing={2}
        >
            <Backdrop className={classes.backdrop} open={solving}>
                <Typography variant="h1" color="textPrimary">
                    Solving...
                </Typography>
            </Backdrop>
            <Grid item xs={12} className={classes.sbHive}>
                <div className={classes.hive}>
                    <HiveCell
                        isCenter
                        tabIndex="1"
                        letter={letter1}
                        setLetter={setLetter1}
                    />
                    <HiveCell
                        tabIndex="2"
                        letter={letter2}
                        setLetter={setLetter2}
                    />
                    <HiveCell
                        tabIndex="3"
                        letter={letter3}
                        setLetter={setLetter3}
                    />
                    <HiveCell
                        tabIndex="4"
                        letter={letter4}
                        setLetter={setLetter4}
                    />
                    <HiveCell
                        tabIndex="5"
                        letter={letter5}
                        setLetter={setLetter5}
                    />
                    <HiveCell
                        tabIndex="6"
                        letter={letter6}
                        setLetter={setLetter6}
                    />
                    <HiveCell
                        tabIndex="7"
                        letter={letter7}
                        setLetter={setLetter7}
                    />
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
            >
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={tooltipOpen}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Oops! Fill out all letters first..."
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => {
                                if (
                                    !letter1 ||
                                    !letter2 ||
                                    !letter3 ||
                                    !letter4 ||
                                    !letter5 ||
                                    !letter6 ||
                                    !letter7
                                ) {
                                    handleTooltipOpen();
                                } else {
                                    setSolving(true);
                                    let letters =
                                        letter1 +
                                        letter2 +
                                        letter3 +
                                        letter4 +
                                        letter5 +
                                        letter6 +
                                        letter7;
                                    letters = letters.toLowerCase();
                                    fetch(
                                        "https://personal-website-spelling-bee-backend.com/backend/findWords",
                                        {
                                            method: "POST",
                                            headers: {
                                                "Content-Type":
                                                    "application/json",
                                            },
                                            body: JSON.stringify({
                                                letters: letters,
                                                centerLetter: letter1.toLowerCase(),
                                            }),
                                        }
                                    )
                                        .then((response) => response.json())
                                        .then((data) => {
                                            setSolving(false);
                                            setResult(data);
                                            document
                                                .getElementById("mainComponent")
                                                .scrollTo({
                                                    top:
                                                        (9 / 11) *
                                                        document.getElementById(
                                                            "mainComponent"
                                                        ).scrollHeight,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                        });
                                }
                            }}
                        >
                            let me solve it for you!
                        </Button>
                    </Tooltip>
                </ClickAwayListener>
            </Grid>
            <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<OpenInNewIcon fontSize="inherit" />}
                    onClick={() => {
                        window.open(
                            "https://www.nytimes.com/puzzles/spelling-bee",
                            "_blank"
                        );
                    }}
                    size="large"
                >
                    check today's puzzle on new york times
                </Button>
            </Grid>
        </Grid>
    );
};

export default Hive;
