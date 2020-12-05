import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
    background: {
        height: "100vh",
        width: "100%",
    },
    italic: {
        fontStyle: "italic",
    },
});

export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Fragment>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.background}
            >
                <Grid item>
                    <Typography variant="h5" color="textPrimary">
                        ShopNow Ecommerce Platform
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        color="textPrimary"
                        gutterBottom
                        className={classes.italic}
                    >
                        Multi-layer Menu:{" "}
                    </Typography>
                    <video
                        src="https://personalwebsite2.blob.core.windows.net/container/Menu.mp4"
                        type="video/mp4"
                        autoPlay
                        loop
                        width={isSmScreen ? "100%" : 490}
                        muted
                    />
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.background}
            >
                <Grid item>
                    <Typography
                        variant="h6"
                        color="textPrimary"
                        gutterBottom
                        className={classes.italic}
                    >
                        SMS Template Generator:{" "}
                    </Typography>
                    <video
                        src="https://personalwebsite2.blob.core.windows.net/container/Template.mp4"
                        type="video/mp4"
                        autoPlay
                        loop
                        width={isSmScreen ? "100%" : 490}
                        muted
                    />
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.background}
            >
                <Grid item>
                    <Typography
                        variant="h6"
                        color="textPrimary"
                        gutterBottom
                        className={classes.italic}
                    >
                        WeChat Public Account Message Generator:{" "}
                    </Typography>
                    <video
                        src="https://personalwebsite2.blob.core.windows.net/container/welcome_message.mp4"
                        type="video/mp4"
                        autoPlay
                        loop
                        width={isSmScreen ? "100%" : 490}
                        muted
                    />
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.background}
            >
                <Grid item>
                    <Typography
                        variant="h6"
                        color="textPrimary"
                        gutterBottom
                        className={classes.italic}
                    >
                        Marketing Data Visulization:{" "}
                    </Typography>
                    <video
                        src="https://personalwebsite2.blob.core.windows.net/container/data_visulization.mp4"
                        type="video/mp4"
                        autoPlay
                        loop
                        width={isSmScreen ? "100%" : 576}
                        muted
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};
