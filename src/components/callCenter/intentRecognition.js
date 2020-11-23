import React, { useState } from "react";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import {
    Backdrop,
    Card,
    CardContent,
    Grid,
    IconButton,
    TextField,
    Tooltip,
    Typography,
} from "@material-ui/core";
import { MenuOpen as MenuOpenIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: theme.palette.common.black,
    },
    cardRoot: {
        width: 216,
        height: 200,
        overflowX: "auto",
    },
    tooltip: {
        fontSize: 16,
    },
}));

export default (props) => {
    const classes = useStyles();
    const [text, setText] = useState();
    const [intentString, setIntentString] = useState();

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const recognizeIntent = () => {
        fetch(
            `https://westus.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/bd2bf039-0fa0-4ca3-839a-4f47053e6fd2/slots/production/predict?subscription-key=a1c2ea07c42a4b528adfc341c38668d9&query=${text}`
        )
            .then((res) => res.json())
            .then((luisRes) => {
                console.log(luisRes);
                setIntentString(`{
    query: "${luisRes.query}",
    topScoringIntent: {
        intent: "${luisRes.prediction.topIntent}",
        score: "${
            luisRes.prediction.intents[luisRes.prediction.topIntent].score
        }",
    },
}`);
            });
    };

    return (
        <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
                <Typography variant="h6" color="textPrimary">
                    Intent Recognition (Yes or No):
                </Typography>
            </Grid>
            <Grid item>
                <TextField
                    label="Enter Text Here"
                    variant="filled"
                    onChange={handleTextChange}
                />
            </Grid>
            <Grid item>
                <Tooltip
                    title="Click to Get Intent"
                    placement="right"
                    classes={{ tooltip: classes.tooltip }}
                >
                    <IconButton
                        color="secondary"
                        aria-label="Click to Get Intent"
                        onClick={recognizeIntent}
                    >
                        <MenuOpenIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item>
                <Card className={classes.cardRoot}>
                    <CardContent>
                        <pre>
                            <code>{intentString}</code>
                        </pre>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
