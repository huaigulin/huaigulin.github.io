import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
import Hive from "./hive";
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
    cardRoot: {
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
}));

export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [result, setResult] = useState([]);

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
                    <b>New York Times Spelling Bee Solver</b>
                </Typography>
            </Grid>
            <Grid item style={{ width: "100%" }}>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justify="center"
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <Hive setResult={setResult} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card
                            className={classes.cardRoot}
                            variant="outlined"
                            style={
                                isSmScreen
                                    ? { marginLeft: 8, marginRight: 8 }
                                    : {}
                            }
                        >
                            <CardContent style={{ height: "80%" }}>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    I have found {result.length} word for you
                                </Typography>
                                <div
                                    style={{
                                        height: "100%",
                                        overflow: "auto",
                                    }}
                                >
                                    <ul
                                        style={{
                                            columnCount: 3,
                                            listStyleType: "none",
                                        }}
                                    >
                                        {result.length > 0 &&
                                            result.map((word, index) => (
                                                <li key={index}>
                                                    <Typography variant="body1">
                                                        {word}
                                                    </Typography>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    endIcon={
                                        <OpenInNewIcon fontSize="inherit" />
                                    }
                                    onClick={() => {
                                        window.open(
                                            "https://github.com/huaigulin/NYTimes_Spelling_Bee_Solver",
                                            "_blank"
                                        );
                                    }}
                                >
                                    check my algorithm
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
