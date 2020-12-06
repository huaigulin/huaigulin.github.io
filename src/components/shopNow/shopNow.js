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
                                A one-stop platform solution that helps
                                international businesses launch and manage
                                eCommerce activities in the Chinese market
                            </Typography>
                            <br />
                            <Typography color="textPrimary" align="center">
                                Type of Work: professional, team
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
                    <Typography
                        variant="h6"
                        color="textPrimary"
                        gutterBottom
                        className={classes.italic}
                        style={
                            isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}
                        }
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
                        style={
                            isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}
                        }
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
                        style={
                            isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}
                        }
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
                        style={
                            isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}
                        }
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
                        style={
                            isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}
                        }
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
                        style={
                            isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}
                        }
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};
