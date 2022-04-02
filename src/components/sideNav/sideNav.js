import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { TreeView, TreeItem } from "@material-ui/lab";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const useStyles = makeStyles((theme) => ({
  sideBackground: {
    backgroundColor: "#121212",
    minHeight: "100vh",
    color: "rgba(255, 255, 255, 0.6)",
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
  { nodeId: "1", label: "Introduction", start: 0, end: 1 / 13 },
  {
    nodeId: "expandable",
    label: "User Experience Design",
    nestedData: [
      {
        nodeId: "2",
        label: "Instruction Set for Strangers",
        start: 1 / 13,
        end: 2 / 13,
      },
    ],
  },
  {
    nodeId: "expandable1",
    label: "Data Visualization",
    nestedData: [
      {
        nodeId: "3",
        label: "ShopNow E-commerce Platform",
        start: 2 / 13,
        end: 4 / 13,
      },
    ],
  },
  {
    nodeId: "expandable2",
    label: "Live Interactive Experiences",
    nestedData: [
      {
        nodeId: "4",
        label: "Spelling Bee Solver",
        start: 4 / 13,
        end: 6 / 13,
      },
      {
        nodeId: "5",
        label: "Let's Draw Together",
        start: 6 / 13,
        end: 7 / 13,
      },
      {
        nodeId: "6",
        label: "Intelligent Call Center for Banks, Proof of Concept",
        start: 7 / 13,
        end: 8 / 13,
      },
    ],
  },
  {
    nodeId: "expandable3",
    label: "Creative Coding",
    nestedData: [
      {
        nodeId: "7",
        label: "Clock Face",
        start: 8 / 13,
        end: 9 / 13,
      },
      {
        nodeId: "8",
        label: "Hourglass",
        start: 9 / 13,
        end: 10 / 13,
      },
    ],
  },
  {
    nodeId: "expandable4",
    label: "Full-stack and Mobile App Development",
    nestedData: [
      {
        nodeId: "4",
        label: "Customer Service AI Trainer",
        start: 10 / 13,
        end: 11 / 13,
      },
      {
        nodeId: "5",
        label: "Crawler Manager",
        start: 11 / 13,
        end: 12 / 13,
      },
    ],
  },
  { nodeId: "9", label: "Get in Touch", start: 12 / 13, end: 1 },
];

export default (props) => {
  const { scrollPosition } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    if (scrollPosition > 0.5 / 14 && scrollPosition < 1.5 / 14)
      setExpanded(["expandable"]);
    if (scrollPosition >= 1.5 / 14 && scrollPosition < 3.5 / 14)
      setExpanded(["expandable1"]);
    if (scrollPosition >= 3.5 / 14 && scrollPosition < 8.5 / 14)
      setExpanded(["expandable2"]);
    if (scrollPosition >= 8.5 / 14 && scrollPosition < 10.5 / 14)
      setExpanded(["expandable3"]);
    if (scrollPosition >= 10.5 / 14 && scrollPosition < 12.5 / 14)
      setExpanded(["expandable4"]);
  }, [scrollPosition]);

  return (
    <SimpleBar style={{ height: "100vh" }}>
      <Grid
        className={classes.sideBackground}
        container
        direction='column'
        justify='center'
        alignItems='flex-start'
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
                  document.getElementById("mainComponent").scrollTo({
                    top:
                      row.start *
                      document.getElementById("mainComponent").scrollHeight,
                    left: 0,
                    behavior: "smooth",
                  });
                } else {
                  setExpanded((expanded) => {
                    if (row.nodeId.startsWith("expandable")) {
                      const index = expanded.indexOf(row.nodeId);
                      if (index > -1) {
                        expanded.splice(index, 1);
                        return [...expanded];
                      } else {
                        return [row.nodeId];
                      }
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
                          scrollPosition > r.start - 0.05 &&
                          scrollPosition <= r.end - 0.05,
                      }),
                      selected: classes.treeItemSelected,
                    }}
                    nodeId={r.nodeId}
                    label={r.label}
                    onClick={() => {
                      console.log(
                        document.getElementById("mainComponent").scrollHeight
                      );
                      document.getElementById("mainComponent").scrollTo({
                        top:
                          r.start *
                          document.getElementById("mainComponent").scrollHeight,
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
    </SimpleBar>
  );
};
