import React, { useState, Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
    Button,
    Grid,
    Icon,
    Link,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
import { OpenInNew as OpenInNewIcon } from "@material-ui/icons";

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
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
            className={isSmScreen ? classes.backgroundSm : classes.background}
        >
            <Grid item>
                <Typography
                    variant="h5"
                    color="textPrimary"
                    align="center"
                    style={isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}}
                >
                    <b>Time, the Trilogy</b>
                </Typography>
            </Grid>
        </Grid>
    );
};
