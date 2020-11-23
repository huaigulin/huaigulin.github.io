import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProjectPage from "./views/projectPage/projectPage";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        background: {
            default: "#121212",
            level1: "#212121",
            level2: "#333",
            paper: "#424242",
        },
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            light: "#80d6ff",
            main: "#42a5f5",
            dark: "#0077c2",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff77a9",
            main: "#ec407a",
            dark: "#b4004e",
            contrastText: "#fff",
        },
        text: {
            disabled: "rgba(255, 255, 255, 0.5)",
            hint: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)",
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.7)",
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <ProjectPage />
    </ThemeProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
