import React, { useState, Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { OpenInNew as OpenInNewIcon } from "@material-ui/icons";
import Demo from "./demo";

const useStyles = makeStyles((theme) => ({
    background: {
        height: "100vh",
        width: "100%",
    },
    backgroundSm: {
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
                <Typography variant="h4" color="textPrimary">
                    Intelligent Call Center for Banks, Proof of Concept
                </Typography>
            </Grid>
            {displayVideo ? (
                <Fragment>
                    <Grid item>
                        <iframe
                            width={isSmScreen ? "100%" : "736"}
                            height={isSmScreen ? "315" : "480"}
                            src="https://www.youtube.com/embed/v6TqeO2SzT0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
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
