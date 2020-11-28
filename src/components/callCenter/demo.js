import React, { Fragment } from "react";
import { Button, Grid } from "@material-ui/core";
import {
    ArrowBack as ArrowBackIcon,
    OpenInNew as OpenInNewIcon,
} from "@material-ui/icons";
import SpeechRecognition from "./speechToText";
import TextToSpeech from "./textToSpeech";
import IntentRecognition from "./intentRecognition";

export default (props) => {
    const { setDisplayVideo } = props;
    return (
        <Fragment>
            <Grid item style={{ width: "100%" }}>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} md={4}>
                        <SpeechRecognition />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextToSpeech />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <IntentRecognition />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{ width: "100%" }}>
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<ArrowBackIcon fontSize="inherit" />}
                            size="large"
                            onClick={() => setDisplayVideo(true)}
                        >
                            Back to Video
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            color="primary"
                            endIcon={<OpenInNewIcon fontSize="inherit" />}
                            onClick={() => {
                                window.open("https://www.xyici.com", "_blank");
                            }}
                            size="large"
                        >
                            View the Live Demo
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};
