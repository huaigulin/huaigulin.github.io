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
import Demo from "./demo";

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
    const [displayVideo, setDisplayVideo] = useState(true);

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
                    Intelligent Call Center for Banks, Proof of Concept
                </Typography>
            </Grid>
            {displayVideo ? (
                <Fragment>
                    <Grid item>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <iframe
                                    style={
                                        isSmScreen
                                            ? { marginLeft: 8, marginRight: 8 }
                                            : { marginLeft: 16 }
                                    }
                                    width="100%"
                                    height={isSmScreen ? "315" : "480"}
                                    src="https://www.youtube.com/embed/v6TqeO2SzT0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
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
                                    <b>
                                        Using <i>speech recognition</i>,{" "}
                                        <i>text to speech</i>,{" "}
                                        <i>intent recognition</i> and{" "}
                                        <i>frontend animation</i> to showcase
                                        the company's technical expertise in
                                        building an intelligent call center
                                    </b>
                                </Typography>
                                <br />
                                <Typography color="textPrimary" align="center">
                                    Type of Work: <i>professional</i>,{" "}
                                    <i>independent</i>
                                </Typography>
                                <br />
                                <Typography color="textPrimary" align="center">
                                    Icons:{" "}
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://streamlineicons.com/"
                                        color="textSecondary"
                                    >
                                        Streamline Icons
                                        <OpenInNewIcon
                                            color="inherit"
                                            fontSize="inherit"
                                        />
                                    </Link>
                                </Typography>
                                <br />
                                <Typography color="textPrimary" align="center">
                                    Speech Services:{" "}
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/"
                                        color="textSecondary"
                                    >
                                        Microsoft Azure
                                        <OpenInNewIcon
                                            color="inherit"
                                            fontSize="inherit"
                                        />
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{ width: "100%" }}>
                        <Grid container justify="center" spacing={4}>
                            <Grid item>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    endIcon={
                                        <OpenInNewIcon fontSize="inherit" />
                                    }
                                    onClick={() => {
                                        window.open(
                                            "https://youtu.be/v6TqeO2SzT0",
                                            "_blank"
                                        );
                                    }}
                                    size="large"
                                >
                                    View on YouTube
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={() => setDisplayVideo(false)}
                                >
                                    Try It Yourself!
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fragment>
            ) : (
                <Demo setDisplayVideo={setDisplayVideo} />
            )}
        </Grid>
    );
};
