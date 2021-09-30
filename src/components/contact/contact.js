import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Chip, Grid, IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { motion, useAnimation } from "framer-motion";

const useStyles = makeStyles((theme) => ({
    background: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    },
    chipIcon: {
        marginLeft: "-4px !important",
    },
    chipOutlined: {
        color: theme.palette.common.white,
        borderColor: theme.palette.common.white,
    },
}));

export default () => {
    const classes = useStyles();
    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();

    return (
        <div className={classes.background}>
            <h1>Get in Touch</h1>
            <p>huaigu.lin@hotmail.com</p>
            <Grid container justify="center">
                <Typography variant="body1" style={{ position: "relative" }}>
                    This website is built with React.js and
                    <motion.div
                        animate={controls}
                        style={{ position: "absolute", top: 12, right: 12 }}
                    >
                        <FavoriteIcon color="secondary" />
                    </motion.div>
                    <motion.div
                        animate={controls2}
                        style={{ position: "absolute", top: 12, right: 12 }}
                    >
                        <FavoriteIcon color="secondary" />
                    </motion.div>
                    <motion.div
                        animate={controls3}
                        style={{ position: "absolute", top: 12, right: 12 }}
                    >
                        <FavoriteIcon color="secondary" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        style={{ display: "inline-block" }}
                    >
                        <IconButton
                            aria-label="like"
                            color="secondary"
                            fontSize="large"
                            onClick={() => {
                                controls.start({
                                    x: 54,
                                    y: -54,
                                    opacity: 0.2,
                                    rotate: 30,
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                    },
                                    transitionEnd: { visibility: "hidden" },
                                });
                                controls2.start({
                                    x: -40,
                                    y: -40,
                                    opacity: 0,
                                    rotate: -45,
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                    },
                                    transitionEnd: { visibility: "hidden" },
                                });
                                controls3.start({
                                    y: -64,
                                    opacity: 0.1,
                                    rotate: -5,
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                    },
                                    transitionEnd: { visibility: "hidden" },
                                });
                            }}
                        >
                            <FavoriteIcon />
                        </IconButton>
                    </motion.div>
                </Typography>
            </Grid>
        </div>
    );
};
