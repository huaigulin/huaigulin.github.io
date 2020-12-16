import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { TreeView, TreeItem } from "@material-ui/lab";
import {
    KeyboardArrowDown as KeyboardArrowDownIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    sideBackground: {
        backgroundColor: "#121212",
        height: "100vh",
        color: "rgba(255, 255, 255, 0.6)",
        overflowY: "auto",
    },
    treeItemBoldLabel: {
        fontWeight: "bold",
        color: theme.palette.common.white,
    },
    treeItemContent: {
        "&:hover": {
            color: theme.palette.common.white,
        },
        height: "3.5em",
    },
    treeItemLabel: {
        backgroundColor: "#121212 !important",
    },
    treeItemNestedRoot: {
        marginBottom: 16,
        marginTop: 16,
    },
    treeItemRoot: {
        marginBottom: 24,
        "&:first-child": {
            marginTop: 24,
        },
    },
    treeViewRoot: {
        padding: 24,
        height: "fit-content",
    },
}));

const treeItemData = [
    { nodeId: "1", label: "Introduction", start: 0, end: 0.1 },
    {
        nodeId: "expandable",
        label: "Project Showcase",
        nestedData: [
            {
                nodeId: "2",
                label: "Intelligent Call Center for Banks, Proof of Concept",
                start: 0.1,
                end: 0.2,
            },
            {
                nodeId: "3",
                label: "ShopNow E-commerce Platform",
                start: 0.2,
                end: 0.6,
            },
            {
                nodeId: "4",
                label: "Customer Service AI Trainer",
                start: 0.6,
                end: 0.7,
            },
            { nodeId: "5", label: "Crawler Manager", start: 0.7, end: 0.8 },
            { nodeId: "6", label: "Spelling Bee", start: 0.8, end: 0.9 },
        ],
    },
    { nodeId: "7", label: "Get in Touch", start: 0.9, end: 1 },
];

export default (props) => {
    const { scrollPosition } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = useState([]);

    useEffect(() => {
        if (scrollPosition > 0.5 / 10) setExpanded(["expandable"]);
    }, [scrollPosition]);

    return (
        <Grid
            className={classes.sideBackground}
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
        >
            <TreeView
                classes={{ root: classes.treeViewRoot }}
                defaultCollapseIcon={<KeyboardArrowDownIcon />}
                defaultExpandIcon={<KeyboardArrowUpIcon />}
                expanded={expanded}
            >
                {treeItemData.map((row) => (
                    <TreeItem
                        key={row.nodeId}
                        nodeId={row.nodeId}
                        label={row.label}
                        classes={{
                            root: classes.treeItemRoot,
                            content: classes.treeItemContent,
                            label: clsx({
                                [classes.treeItemLabel]: true,
                                [classes.treeItemBoldLabel]:
                                    scrollPosition > row.start - 0.05 &&
                                    scrollPosition <= row.end - 0.05,
                            }),
                            selected: classes.treeItemSelected,
                        }}
                        onClick={() => {
                            if (!row.nestedData) {
                                document
                                    .getElementById("mainComponent")
                                    .scrollTo({
                                        top:
                                            row.start *
                                            document.getElementById(
                                                "mainComponent"
                                            ).scrollHeight,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                            } else {
                                setExpanded((expanded) => {
                                    if (expanded.length > 0) {
                                        return [];
                                    } else {
                                        return ["expandable"];
                                    }
                                });
                            }
                        }}
                    >
                        {row.nestedData &&
                            row.nestedData.map((r) => (
                                <TreeItem
                                    key={r.nodeId}
                                    classes={{
                                        root: classes.treeItemNestedRoot,
                                        content: classes.treeItemContent,
                                        label: clsx({
                                            [classes.treeItemLabel]: true,
                                            [classes.treeItemBoldLabel]:
                                                scrollPosition >
                                                    r.start - 0.05 &&
                                                scrollPosition <= r.end - 0.05,
                                        }),
                                        selected: classes.treeItemSelected,
                                    }}
                                    nodeId={r.nodeId}
                                    label={r.label}
                                    onClick={() => {
                                        document
                                            .getElementById("mainComponent")
                                            .scrollTo({
                                                top:
                                                    r.start *
                                                    document.getElementById(
                                                        "mainComponent"
                                                    ).scrollHeight,
                                                left: 0,
                                                behavior: "smooth",
                                            });
                                    }}
                                />
                            ))}
                    </TreeItem>
                ))}
            </TreeView>
        </Grid>
    );
};
