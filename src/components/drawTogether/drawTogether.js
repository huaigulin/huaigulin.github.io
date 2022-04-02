import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { OpenInNew } from "@material-ui/icons";

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
          <b>Let's Draw Together</b>
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} md={8}>
            <video
              src="https://personalwebsite2.blob.core.windows.net/container/Let's%20draw%20together%20screen%20recording.mov"
              type='video/mov'
              autoPlay
              loop
              width='100%'
              muted
              playsInline
              style={
                isSmScreen
                  ? { marginLeft: 8, marginRight: 8 }
                  : { marginLeft: 16 }
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              color='textPrimary'
              align='center'
              style={
                isSmScreen
                  ? { marginLeft: 8, marginRight: 8 }
                  : { marginRight: 16 }
              }
            >
              <b>
                A collaborative drawing experience made with p5.js and p5.party
              </b>
            </Typography>
            <br />
            <Typography color='textPrimary' align='center'>
              Type of Work: <i>school project</i>, <i>independent</i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          size='large'
          color='primary'
          variant='contained'
          endIcon={<OpenInNew fontSize='inherit' />}
          onClick={() => {
            window.open(
              "https://huaigulin.github.io/collaborative_draw/",
              "_blank"
            );
          }}
        >
          check it out!
        </Button>
      </Grid>
    </Grid>
  );
};
