import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Hive from "./hive";

const useStyles = makeStyles((theme) => ({
    background: {
        height: "100vh",
        width: "100%",
    },
    backgroundSm: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        width: "100%",
    },
}));

export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid
            container
            spacing={2}
            className={isSmScreen ? classes.backgroundSm : classes.background}
            justify="center"
        >
            <Grid item>
                <Hive />
            </Grid>
            <Grid item></Grid>
        </Grid>
    );
};
