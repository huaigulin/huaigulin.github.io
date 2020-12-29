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
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
                        <Hive />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    gutterBottom
                                >
                                    I have found 0 word for you
                                </Typography>
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
