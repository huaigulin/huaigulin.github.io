import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, IconButton, Typography, useMediaQuery } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  background: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  chipIcon: {
    marginLeft: "-4px !important",
  },
  chipOutlined: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
  },
  marginForSm: {
    marginLeft: 8,
    marginRight: 8,
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const controls = useAnimation();
  // const controls2 = useAnimation();
  // const controls3 = useAnimation();

  return (
    <div className={classes.background}>
      <h1
        style={{
          fontFamily: "semplicitapro, sans-serif",
          fontWeight: 700,
          fontStyle: "italic",
          textAlign: "center",
        }}
        className={clsx({ [classes.marginForSm]: isSmScreen })}
      >
        Wanna see more? Get in touch!
      </h1>
      <p>huaigu.lin@hotmail.com</p>
      <Grid container justify='center'>
        <Typography variant='body1' style={{ position: "relative" }}>
          This website is built with React.js and
          <motion.div
            animate={{
              x: 64,
              y: -64,
              opacity: 0,
              rotate: 30,
              zoom: 2,
              transition: {
                duration: 3,
                repeat: Infinity,
              },
              transitionEnd: { visibility: "hidden" },
            }}
            style={{ position: "absolute", top: 12, right: 12 }}
          >
            <FavoriteIcon color='secondary' />
          </motion.div>
          <motion.div
            animate={{
              x: -48,
              y: -48,
              opacity: 0,
              rotate: -45,
              transition: {
                duration: 3,
                repeat: Infinity,
              },
              transitionEnd: { visibility: "hidden" },
            }}
            style={{ position: "absolute", top: 12, right: 12 }}
          >
            <FavoriteIcon color='secondary' />
          </motion.div>
          <motion.div
            animate={{
              y: -72,
              opacity: 0,
              rotate: -5,
              zoom: 1.5,
              transition: {
                duration: 3,
                repeat: Infinity,
              },
              transitionEnd: { visibility: "hidden" },
            }}
            style={{ position: "absolute", top: 12, right: 12 }}
          >
            <FavoriteIcon color='secondary' />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            style={{ display: "inline-block" }}
          >
            <IconButton aria-label='like' color='secondary' fontSize='large'>
              <FavoriteIcon />
            </IconButton>
          </motion.div>
        </Typography>
      </Grid>
    </div>
  );
};
