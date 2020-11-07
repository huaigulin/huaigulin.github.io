import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
    background: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    },
});

export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Grid container xs={12}>
            {isBigScreen && <Grid item md={3}></Grid>}
            <Grid item xs={12} md={9}>
                <div className={classes.background}>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </Grid>
        </Grid>
    );
};
