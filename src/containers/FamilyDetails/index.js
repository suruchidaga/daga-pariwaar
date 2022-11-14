import ContentHeader from "../ContentHeader";
import { loadState } from "@lib/helpers/localStorage";
import SearchFamily from "./SearchFamily";
import ReadFamilyDetails from "./ReadFamilyDetails";
import UpcomingEvents from "./UpcomingEvents";
import FamilyDetailsWrapper from "./styles";
//import { cloneDeep } from "lodash";// Add cloneDeep to the lodash library
import React, { useRef, useState } from "react";
import { Tree } from "./FamilyTree";
//import Tree from "../../components/uielements/tree";
import {
  DownOutlined,
} from "@ant-design/icons";
import familyDetails from "./familyDetails.json";

function unflatten(items) {
  var tree = [],
      mappedArr = {}

  // Build a hash table and map items to objects
  items.forEach(function(item) {
    var key = item.No;
    if (!mappedArr.hasOwnProperty(key)) { // in case of duplicates
      mappedArr[key] = item; // the extracted id as key, and the item as value
      mappedArr[key].children = [];  // under each item, add a key "children" with an empty array as value
    }
  })

  // If root-level nodes are not included in hash table, include them
  items.forEach(function(item) {
    var parentId = item.Parent;
    if (!mappedArr.hasOwnProperty(parentId)) {
      // make up an item for root-level node
      const newItem = item;
      newItem.key = 0;
      newItem.Name = item.NAME;
      newItem.Parent = item.Parent;
      mappedArr[parentId] = newItem; // the parent id as key, and made-up an item as value
      mappedArr[parentId].children = [];
    }
  })

  // Loop over hash table
  for (var key in mappedArr) {
    if (mappedArr.hasOwnProperty(key)) {
      const mappedElem = mappedArr[key];
      mappedElem.key = mappedElem.No;

      // If the element is not at the root level, add it to its parent array of children. Note this will continue till we have only root level elements left
      if (mappedElem.Parent) {
        var parentId = mappedElem.Parent;
        var childItem = mappedElem;
        var parentItem = mappedArr[parentId];
        parentItem = fillRemainingDetailsInParent(parentItem, childItem);
        childItem = fillRemainingDetails(parentItem, childItem);
        console.log("after fillRemainingDetails: ") ;
                console.log(childItem) ;


        parentItem.children.push(childItem);
      }

      // If the element is at the root level, directly push to the tree
      else {
        tree.push(mappedElem);
      }
    }
  }

  return tree[0];

}
function fillRemainingDetailsInParent(parentItem, childItem) {
    parentItem['NAME'] = titleCase(parentItem.NAME);
    /*if (parentItem.RESADD !='') {
        parentItem['RESADD'] = replaceNewLineWithBreakTag(parentItem.RESADD);
    }
    if (parentItem.RESADD =='' && childItem.RESADD !='' && (childItem.Parent == parentItem.No) &&
     (childItem.Relation == 'H' || childItem.Relation == 'W' || childItem.Relation == 'S') ) {
        parentItem['RESADD'] = replaceNewLineWithBreakTag(childItem.RESADD);
    }
    if (parentItem.RESPHNO =='' && childItem.RESPHNO !='' && (childItem.Parent == parentItem.No) &&
        (childItem.Relation == 'H' || childItem.Relation == 'W' || childItem.Relation == 'S') ) {
        parentItem['RESPHNO'] = childItem.RESPHNO;
    }*/
    if (childItem.Relation == 'H' || childItem.Relation == 'W' && (childItem.Parent == parentItem.No) &&
        (childItem.Relation == 'H' || childItem.Relation == 'W' || childItem.Relation == 'S') ) {
        parentItem['SPOUSE'] = childItem.NAME;
    }
    return parentItem;
}
function fillRemainingDetails(parentItem, childItem) {
console.log("inside fillRemainingDetails: "+ childItem.NAME) ;
    console.log(parentItem) ;
    childItem['NAME'] = titleCase(childItem.NAME);
    if (parentItem.EMAILID != '') {
            parentItem['EMAILID'] = parentItem.EMAILID.toLowerCase();
        }
    if (childItem.EMAILID != '') {
            childItem['EMAILID'] = childItem.EMAILID.toLowerCase();
        }
    if (childItem.Relation == 'H' || childItem.Relation == 'W' ) {
        childItem['DOA'] = parentItem.DOA;
        childItem['SPOUSE'] = parentItem.NAME;
    }
    if (childItem.Relation == 'S' || childItem.Relation == 'D') {
    console.log(parentItem.children.length)
        childItem['FATHER'] = (parentItem.children != null &&
        (parentItem.Relation == '' || parentItem.Relation == 'S')) ? parentItem.NAME :
            (parentItem.children.length > 0 && parentItem.children[0].Relation == 'H' ? parentItem.children[0].NAME : '');
        childItem['MOTHER'] = (parentItem.children != null &&
        (parentItem.Relation == '' || parentItem.Relation == 'D')) ? parentItem.NAME :
            (parentItem.children.length > 0 && parentItem.children[0].Relation == 'W' ? parentItem.children[0].NAME : '');
    }
    if ((childItem.Relation == 'W' || childItem.Relation == 'H') && (childItem.Parent == parentItem.No)) {
        if (parentItem.FATHERINLAW != '') {
            parentItem['FATHERINLAW'] = titleCase(parentItem.FATHERINLAW);
        }
        if (parentItem.MOTHERINLAW != '') {
            parentItem['MOTHERINLAW'] = titleCase(parentItem.MOTHERINLAW);
        }
        childItem['FATHER'] = parentItem.FATHERINLAW;
        childItem['MOTHER'] = parentItem.MOTHERINLAW;
        childItem['FATHERINLAW'] = parentItem.FATHER;
        childItem['MOTHERINLAW'] = parentItem.MOTHER;
    }
    /*if (childItem.RESADD =='' && (childItem.Parent == parentItem.No)) {
        childItem['RESADD'] = replaceNewLineWithBreakTag(parentItem.RESADD);
    }*/
    if (childItem.RESPHNO =='' && (childItem.Parent == parentItem.No)) {
        childItem['RESPHNO'] = parentItem.RESPHNO;
    }
    console.log(childItem) ;
    return childItem;
}
function titleCase(str) {
console.log(str.split(' '));
    if (typeof str !== 'undefined') {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    } else {
        return "";
    }

}
function replaceNewLineWithBreakTag(text) {
  // Replace the \n with <br>
    console.log(text);

  var otext = text.replace(/(\r\n|\r|\n)/g, '<br/>');
  // Update the value of paragraph
  console.log(otext);
  return otext;
}

export default function FamilyDetails1() {
  const selectedMember = loadState("selectedMember");
  const selectedMemberName = `${selectedMember?.name?.first} ${selectedMember?.name?.last}`;
   const tree = [];
   tree.push(unflatten(familyDetails));
  const [treeData, setTreeData] = useState(() => tree);
  const [rawFamilyData, setRawFamilyData] = useState(() => familyDetails);


  //setTreeData(unflatten(familyDetails));
  //setTreeData(unflatten(familyDetails));
 /*const [rawFamilyData, setRawFamilyData] = useState({});
  setRawFamilyData(familyDetails);
  console.log(treeData);*/
  console.log(treeData);
  //<UpcomingEvents familyData = {rawFamilyData}/>

  return (
    <FamilyDetailsWrapper>
      <ContentHeader headerTitle="Family Details" />
      <ReadFamilyDetails treeData = {treeData}/>
    </FamilyDetailsWrapper>
  );
}
