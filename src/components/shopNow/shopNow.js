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
                    <Typography variant="h5" color="textPrimary" align="center">
                        ShopNow Ecommerce Platform
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
                                        : { marginLeft: 16 }
                                }
                            >
                                <b>
                                    A one-stop platform solution that helps
                                    international businesses launch and manage
                                    eCommerce activities in the Chinese market
                                </b>
                            </Typography>
                            <br />
                            <Typography color="textPrimary" align="center">
                                Type of Work: <i>professional</i>, <i>team</i>
                            </Typography>
                            <br />
                            <Typography color="textPrimary" align="center">
                                Designer: Felix Wang
                            </Typography>
                            <br />
                            <Typography color="textPrimary" align="center">
                                Co-developer: Chenjie Wang
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h6"
                                color="textPrimary"
                                gutterBottom
                                className={classes.italic}
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : {}
                                }
                            >
                                Multi-layer Menu:{" "}
                            </Typography>
                            <video
                                src="https://personalwebsite2.blob.core.windows.net/container/Menu.mp4"
                                type="video/mp4"
                                autoPlay
                                loop
                                width="100%"
                                muted
                                playsInline
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : {}
                                }
                            />
                        </Grid>
                    </Grid>
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
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h6"
                                color="textPrimary"
                                gutterBottom
                                className={classes.italic}
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : { marginLeft: 16 }
                                }
                            >
                                SMS Template Generator:{" "}
                            </Typography>
                            <video
                                src="https://personalwebsite2.blob.core.windows.net/container/Template.mp4"
                                type="video/mp4"
                                autoPlay
                                loop
                                width="100%"
                                muted
                                playsInline
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : { marginLeft: 16 }
                                }
                            />
                        </Grid>
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
                                This form contains many tools that help users
                                easily generate SMS marketing contents that
                                follow regulators' rules
                            </Typography>
                            <br />
                            <Typography
                                color="textPrimary"
                                align="center"
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : { marginRight: 16 }
                                }
                            >
                                SUBMIT button submits the template application
                                to multiple SMS service providers and redirects
                                to an application status page, where user can
                                monitor the status of the application
                            </Typography>
                        </Grid>
                    </Grid>
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
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h6"
                                color="textPrimary"
                                gutterBottom
                                className={classes.italic}
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : { marginLeft: 16 }
                                }
                            >
                                WeChat Public Account Message Generator:{" "}
                            </Typography>
                            <video
                                src="https://personalwebsite2.blob.core.windows.net/container/welcome_message.mp4"
                                type="video/mp4"
                                autoPlay
                                loop
                                width="100%"
                                muted
                                playsInline
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : { marginLeft: 16 }
                                }
                            />
                        </Grid>
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
                                WeChat Public Account is an import eCommerce
                                marketing channel in the Chinese market
                            </Typography>
                            <br />
                            <Typography
                                color="textPrimary"
                                align="center"
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : { marginRight: 16 }
                                }
                            >
                                This form helps users generate WeChat Public
                                Account messages with materials they uploaded
                            </Typography>
                            <br />
                            <Typography
                                color="textPrimary"
                                align="center"
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : { marginRight: 16 }
                                }
                            >
                                Users can choose many content types, as well as
                                visualize the message simultaneously when they
                                are filling out the form
                            </Typography>
                        </Grid>
                    </Grid>
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
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography
                                variant="h6"
                                color="textPrimary"
                                gutterBottom
                                className={classes.italic}
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : { marginLeft: 16 }
                                }
                            >
                                Sales and Marketing Data Visulization:{" "}
                            </Typography>
                            <video
                                src="https://personalwebsite2.blob.core.windows.net/container/data_visulization.mp4"
                                type="video/mp4"
                                autoPlay
                                loop
                                width="100%"
                                muted
                                playsInline
                                style={
                                    isSmScreen
                                        ? { marginLeft: 8, marginRight: 8 }
                                        : { marginLeft: 16 }
                                }
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
                                Charts, tables and cards that help users track
                                sales data and monitor effectiveness of
                                marketing campaigns
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};
