import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

function Tree() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem
        class="treeview-colorful w-20 border border-secondary mx-4 my-4"
        nodeId="1"
        label="View one"
      >
        <p>Tree View</p>
        <button>+</button>
        <TreeItem nodeId="2" label="Sub view one" />
        <button>+</button>
        <TreeItem nodeId="3" label="Sub view one" />
        <button>+</button>
        <TreeItem nodeId="4" label="Sub view one" />
        <button>+ Add New View</button>
      </TreeItem>
    </TreeView>
  );
}

export default Tree;
