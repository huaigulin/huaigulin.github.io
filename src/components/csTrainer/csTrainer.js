import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Link, Typography, useMediaQuery } from "@material-ui/core";
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
                <Typography variant="h5" color="textPrimary" align="center">
                    <b>Customer Service AI Trainer</b>
                </Typography>
            </Grid>
            <Grid item>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <video
                            src="https://personalwebsite2.blob.core.windows.net/container/customer_service_ai_trainer_demo.mp4"
                            type="video/mp4"
                            autoPlay
                            loop
                            width="100%"
                            muted
                            playsInline
                            style={
                                isSmScreen
                                    ? { marginLeft: 8, marginRight: 8 }
                                    : { marginLeft: 16, maxHeight: 540 }
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
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
                                An Android native APP that trains customer
                                service agents on how to talk to customers.{" "}
                                <i>Speech recognition</i> is used to recognize
                                users' voice. A custom <i>NLP module</i> is used
                                to mimic customers' questions, score customer
                                service agents' answers and give out standard
                                answers
                            </b>
                        </Typography>
                        <br />
                        <Typography color="textPrimary" align="center">
                            Type of Work: <i>professional</i>,{" "}
                            <i>independent</i>
                        </Typography>
                        <br />
                        <Typography color="textPrimary" align="center">
                            Speech Recognition:{" "}
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.xfyun.cn/services/voicedictation"
                                color="textSecondary"
                            >
                                Xunfei Cloud
                                <OpenInNewIcon
                                    color="inherit"
                                    fontSize="inherit"
                                />
                            </Link>
                        </Typography>
                        <br />
                        <Typography color="textPrimary" align="center">
                            NLP Module: Zhijue Information
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
