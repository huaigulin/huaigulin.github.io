import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    background: {
        height: "100vh",
        width: "100%",
    },
});

export default () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
            className={classes.background}
        >
            <Grid item>
                <Typography variant="h4" color="textPrimary">
                    ShopNow Ecommerce Platform
                </Typography>
            </Grid>
        </Grid>
    );
};
