import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, useMediaQuery } from "@material-ui/core";
import SideNavigation from "../../components/sideNav/sideNav";
import Introduction from "../../components/introduction/introduction";
import CallCenterDemo from "../../components/callCenter/callCenter";
import ShopNow from "../../components/shopNow/shopNow";
import CsTrainer from "../../components/csTrainer/csTrainer";
import CrawlerManager from "../../components/crawlerManager/crawlerManager";
import SpellingBee from "../../components/spellingBee/spellingBee";
import Contact from "../../components/contact/contact";
import InstructionSet from "../../components/instructionSet/instructionSet";
import Time from "../../components/time/time";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const useStyles = makeStyles({
    mainBackground: {
        backgroundColor: "#282c34",
        // height: "100vh",
        // overflowY: "auto",
        width: "100%",
    },
});

export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up("md"));
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position =
            document.getElementById("mainComponent").scrollTop /
            document.getElementById("mainComponent").scrollHeight;
        setScrollPosition(position);
    };
    console.log(scrollPosition);

    useEffect(() => {
        document
            .getElementById("mainComponent")
            .addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document
                .getElementById("mainComponent")
                .removeEventListener("scroll", handleScroll);
        };
    }, []);

    // console.log(scrollPosition);

    return (
        <Grid container>
            {isBigScreen && (
                <Grid item md={3}>
                    <SideNavigation scrollPosition={scrollPosition} />
                </Grid>
            )}
            <Grid item xs={12} md={9}>
                <SimpleBar style={{ height: "100vh" }}>
                    <div id="mainComponent" className={classes.mainBackground}>
                        <Introduction />
                        <CallCenterDemo />
                        <ShopNow />
                        <CsTrainer />
                        <CrawlerManager />
                        <SpellingBee />
                        <InstructionSet />
                        <Time />
                        <Contact />
                    </div>
                </SimpleBar>
            </Grid>
        </Grid>
    );
};
