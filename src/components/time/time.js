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
                    <b>Hourglass</b>
                </Typography>
            </Grid>
            <Grid item>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            color="textPrimary"
                            align="center"
                            style={
                                isSmScreen
                                    ? { marginLeft: 8, marginRight: 8 }
                                    : { marginRight: 16 }
                            }
                        >
                            <b>An hourglass drawing in p5.js</b>
                        </Typography>
                        <br />
                        <Typography color="textPrimary" align="center">
                            Type of Work: <i>school project</i>,{" "}
                            <i>independent</i>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe
                            style={
                                isSmScreen
                                    ? { marginLeft: 8, marginRight: 8 }
                                    : { marginLeft: 16 }
                            }
                            width={400}
                            height={400}
                            src="https://preview.p5js.org/kevin.lin/embed/fIecHbPqB"
                            frameBorder="0"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
