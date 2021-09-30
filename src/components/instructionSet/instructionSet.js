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
                    <b>Instruction Set for Strangers</b>
                </Typography>
            </Grid>
            <Grid item>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <iframe
                            style={
                                isSmScreen
                                    ? { marginLeft: 8, marginRight: 8 }
                                    : { marginLeft: 16 }
                            }
                            width="100%"
                            height={isSmScreen ? "315" : "480"}
                            src="https://www.youtube.com/embed/y5e17zLZ26k"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography
                            color="textPrimary"
                            align="center"
                            style={
                                isSmScreen
                                    ? { marginLeft: 8, marginRight: 8 }
                                    : { marginRight: 16 }
                            }
                        >
                            <b>
                                How to make an installation and get strangers to
                                interact with it <i>without using any text</i>?
                            </b>
                        </Typography>
                        <br />
                        <Typography color="textPrimary" align="center">
                            Type of Work: <i>school project</i>, <i>team</i>
                        </Typography>
                        <br />
                        <Typography color="textPrimary" align="center">
                            Teammate: Tricia Ilena
                        </Typography>
                        <br />
                        <Typography color="textPrimary" align="center">
                            Location:{" "}
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://goo.gl/maps/STaZkdQ2Fe89q62w9"
                                color="textSecondary"
                            >
                                Pier I, Riverside Park South, New York, NY
                                <OpenInNewIcon
                                    color="inherit"
                                    fontSize="inherit"
                                />
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
