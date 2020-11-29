import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
    background: {
        height: "100vh",
        width: "100%",
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
                    <Typography variant="h4" color="textPrimary">
                        ShopNow Ecommerce Platform
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
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
                    <Typography variant="h5" color="textPrimary" gutterBottom>
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
                    <Typography variant="h5" color="textPrimary" gutterBottom>
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
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                        Marketing Data Visulization:{" "}
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
    );
};
