import React, { useState } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import {
    Backdrop,
    Grid,
    IconButton,
    TextField,
    Tooltip,
    Typography,
} from "@material-ui/core";
import { RecordVoiceOver as RecordVoiceOverIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.common.black,
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
    const [speaking, setSpeaking] = useState(false);
    const [text, setText] = useState();

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const textToSpeech = () => {
        const speechConfig = sdk.SpeechConfig.fromSubscription(
            "c87e54e21af94db4bbf766eec411f251",
            "eastus"
        );
        const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
        const synthesizer = new sdk.SpeechSynthesizer(
            speechConfig,
            audioConfig
        );
        synthesizer.speakSsmlAsync(
            `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis"
            xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="zh-CN">
          <voice name="en-US-AriaNeural">
            <mstts:express-as style="customerservice">
              ${text}
            </mstts:express-as>
          </voice>
        </speak>`,
            (result) => {
                setSpeaking(true);
                if (result) {
                    console.log(JSON.stringify(result));
                }
                synthesizer.close();
                setTimeout(() => {
                    setSpeaking(false);
                }, 5000);
            },
            (error) => {
                console.log(error);
                synthesizer.close();
            }
        );
    };

    return (
        <Grid container direction="column" alignItems="center" spacing={2}>
            <Backdrop className={classes.backdrop} open={speaking}>
                <Typography variant="h1" color="textPrimary">
                    Speaking...
                </Typography>
            </Backdrop>
            <Grid item>
                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.italic}
                >
                    Text to Speech:
                </Typography>
            </Grid>
            <Grid item>
                <TextField
                    label="Enter Text Here"
                    multiline
                    rows={12}
                    variant="filled"
                    onChange={handleTextChange}
                />
            </Grid>
            <Grid item>
                <Tooltip
                    title="Click to Speak"
                    placement="right"
                    classes={{ tooltip: classes.tooltip }}
                >
                    <IconButton
                        color="secondary"
                        aria-label="Click to Speak"
                        onClick={textToSpeech}
                    >
                        <RecordVoiceOverIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    );
};
