import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import Loader from "@components/utility/loader";
import { Link } from "react-router-dom";
import FamilyDetailsWrapper from "../FamilyDetails/styles";
import Tree from "./FamilyTree";

export default function ReadFamilyDetails(props) {
  const [expands, setExpands] = useState(false);//() =>  data.map((item) =  item.key));// Initializes the tree expansion key

  //const flatData = useRef({});// the ref variable is used to hold the original tree data and the flattened structure data processed by the enhanced getFlatData.
  const [treeData, setTreeData] = useState({});
  //setTreeData(unflatten(familyDetails));
  //console.log(SearchTree.caller.name);
  console.log(props.treeData);
  //setTreeData(tree);
  /*const [treeData, setTreeData] = useState(() =>  {// Initialize tree data.
    //const tree = unflatten(familyDetails);
    //setTreeData(tree);
    *//*flatData.current.flat = getFlatData(getTree(familyDetails));// Save the flattened structure data processed by the enhanced getFlatData.
    flatData.current.tree = tree;// Save the initial tree data*//*
    setExpands(false);


    //return tree[0];
  });*/
  //setTreeData();

  return (
    <FamilyDetailsWrapper>
      <div style={{ fontSize: 28, fontWeight: "bold" }}>Family Details</div>
        <div className="row">
        <div className="col text-center">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={props?.treeData} />
              </div>
            </div>
        </div>
      </div>

    </FamilyDetailsWrapper>
  );
}
