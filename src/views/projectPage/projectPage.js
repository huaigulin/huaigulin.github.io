import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, useMediaQuery } from "@material-ui/core";
import SideNavigation from "../../components/sideNav/sideNav";

const useStyles = makeStyles({
    mainBackground: {
        backgroundColor: "#282c34",
        height: "100vh",
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
    const [selectedTab, setSelectedTab] = useState(1);

    return (
        <Grid container>
            {isBigScreen && (
                <Grid item md={3}>
                    <SideNavigation
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    />
                </Grid>
            )}
            <Grid item xs={12} md={9}>
                <div className={classes.mainBackground}>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </Grid>
        </Grid>
    );
};
