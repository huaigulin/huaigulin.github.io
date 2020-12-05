import React, { useState } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import {
    Backdrop,
    Card,
    CardContent,
    Grid,
    IconButton,
    Tooltip,
    Typography,
} from "@material-ui/core";
import { Mic as MicIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.common.black,
    },
    cardRoot: {
        width: 200,
        height: 272,
        overflowY: "auto",
    },
    italic: {
        fontStyle: "italic",
    },
    tooltip: {
        fontSize: 16,
    },
}));

export default (props) => {
    const classes = useStyles();
    const [speechRes, setSpeechRes] = useState();
    const [listening, setListening] = useState(false);

    const speechToText = async () => {
        const speechConfig = sdk.SpeechConfig.fromSubscription(
            "c87e54e21af94db4bbf766eec411f251",
            "eastus"
        );
        const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
        setListening(true);
        const recognizeSpeechPromise = new Promise((resolve, reject) => {
            recognizer.recognizeOnceAsync(
                (result) => {
                    recognizer.close();
                    if (result.text === undefined) {
                        reject("error in speech recognition");
                    }
                    resolve(result.text);
                },
                (err) => {
                    recognizer.close();
                    console.error(err);
                }
            );
        });
        const res = await recognizeSpeechPromise;
        console.log(res);
        setSpeechRes(res);
        setListening(false);
    };

    return (
        <Grid container direction="column" alignItems="center" spacing={2}>
            <Backdrop className={classes.backdrop} open={listening}>
                <Typography variant="h1" color="textPrimary">
                    Listening...
                </Typography>
            </Backdrop>
            <Grid item>
                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.italic}
                >
                    Speech Recognition:
                </Typography>
            </Grid>
            <Grid item>
                <Tooltip
                    title="Click to Record"
                    placement="right"
                    classes={{ tooltip: classes.tooltip }}
                >
                    <IconButton
                        color="secondary"
                        aria-label="Click to Record"
                        onClick={speechToText}
                    >
                        <MicIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item>
                <Card className={classes.cardRoot}>
                    <CardContent>
                        <Typography variant="body1">{speechRes}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
