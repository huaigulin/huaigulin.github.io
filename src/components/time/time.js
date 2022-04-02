import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Sketch from "./sketch";

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
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const iframeRef = React.createRef();

  // useEffect(() => {
  //   // console.log(document.getElementsByClassName("preview-nav")[0]);
  //   if (iframeRef.current.getElementsByClassName("preview-nav")[0]) {
  //     iframeRef.current.getElementsByClassName("preview-nav")[0].remove();
  //   }
  // }, [iframeRef]);

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}
      className={isSmScreen ? classes.backgroundSm : classes.background}
    >
      <Grid item>
        <Typography
          variant='h5'
          color='textPrimary'
          align='center'
          style={isSmScreen ? { marginLeft: 8, marginRight: 8 } : {}}
        >
          <b>Hourglass</b>
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Typography
              color='textPrimary'
              align='center'
              style={
                isSmScreen
                  ? { marginLeft: 8, marginRight: 8 }
                  : { marginRight: 16 }
              }
            >
              <b>An hourglass drawing in p5.js</b>
            </Typography>
            <br />
            <Typography color='textPrimary' align='center'>
              Type of Work: <i>school project</i>, <i>independent</i>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Sketch />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
