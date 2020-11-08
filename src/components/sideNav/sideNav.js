import React from "react";
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
    },
    treeItemBoldLabel: {
        fontWeight: "bold",
        color: theme.palette.white,
        backgroundColor: "#121212 !important",
    },
    treeItemContent: {
        "&:hover": {
            color: theme.palette.white,
        },
    },
    treeItemNestedRoot: {
        marginBottom: 16,
        marginTop: 16,
    },
    treeItemRoot: {
        marginBottom: 24,
    },
    treeViewRoot: {
        padding: 24,
    },
}));

const treeItemData = [
    { nodeId: 1, label: "Introduction" },
    {
        nodeId: 2,
        label: "Project Showcase",
        nestedData: [
            {
                nodeId: 3,
                label: "Intelligent Call Center for Banks, Proof of Concept",
            },
            { nodeId: 4, label: "ShopNow Ecommerce Platform" },
            { nodeId: 5, label: "Customer Service AI Trainer" },
            { nodeId: 6, label: "Crawler Manager" },
            { nodeId: 7, label: "Spelling Bee" },
        ],
    },
    { nodeId: 8, label: "Get in Touch" },
];

export default (props) => {
    const { selectedTab, setSelectedTab } = props;
    const classes = useStyles();
    console.log(selectedTab);

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
            >
                {treeItemData.map((row) => (
                    <TreeItem
                        nodeId={row.nodeId}
                        label={row.label}
                        classes={{
                            root: classes.treeItemRoot,
                            content: classes.treeItemContent,
                            label: clsx({
                                [classes.treeItemBoldLabel]:
                                    selectedTab === row.nodeId,
                            }),
                        }}
                        onClick={() => {
                            setSelectedTab(row.nodeId);
                        }}
                    >
                        {row.nestedData &&
                            row.nestedData.map((r) => (
                                <TreeItem
                                    classes={{
                                        root: classes.treeItemNestedRoot,
                                        content: classes.treeItemContent,
                                        label: clsx({
                                            [classes.treeItemBoldLabel]:
                                                selectedTab === r.nodeId,
                                        }),
                                    }}
                                    nodeId={r.nodeId}
                                    label={r.label}
                                    onClick={() => {
                                        setSelectedTab(r.nodeId);
                                    }}
                                />
                            ))}
                    </TreeItem>
                ))}
            </TreeView>
        </Grid>
    );
};
