import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useLayoutEffect, useState } from "react";
import { DoubleRightOutlined, InfoCircleOutlined, ArrowRightOutlined, PlusCircleOutlined, UserOutlined, StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { Card, Divider, Avatar, Modal, Form, Row, Col } from 'antd';
import "../../components/uielements/styles/tree.style.css";
import MemberDetails from "./MemberDetails";

const Tree = (props) => {
console.log(props);
//const [treeData, setTreeData] = useState({});
  const [selectedRecords, setSelectedRecords] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);



console.log(props.data);

  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {props.data.map((tree) => (
          <TreeNode node={tree} isModalVisible={isModalVisible} selectedRecords={selectedRecords}
          nodeChange={setSelectedRecords} modalChange={setIsModalVisible}/>
        ))}
      </ul>
      <MemberDetails isModalVisible={isModalVisible} selectedRecords={selectedRecords}
        nodeChange={setSelectedRecords} modalChange={setIsModalVisible}/>
    </div>
  );
};

const TreeNode = (props) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const [newSelectedRecords, setNewSelectedRecords] = useState(props.selectedRecords);
  const [newIsModalVisible, setNewIsModalVisible] = useState(props.isModalVisible);
    console.log(props);
    const node = props.node;
  const hasChild = node.children ? true : false;
  //console.log(hasChild);

const showMemberDetails = (props, node) => {
    setNewIsModalVisible((v) => !v);
    props.modalChange(newIsModalVisible);
    setNewSelectedRecords((v) => node);
    props.nodeChange(newSelectedRecords);
    console.log(props);
}

const callbackCloseModal = () => {
   this.setState({ isModalVisible: false, selectedRecords:null });
}
  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <ArrowRightOutlined
                          style={{ marginLeft: 10, marginTop: 5 }}
                        />
          </div>
        )}

        <div id= {node.No} className="col d-tree-head" style={{ fontSize: 18 }}>
        <Avatar size="small" icon={<UserOutlined />} />
        <i className={`mr-2 fa fa-folder`}> </i>
          {node.NAME}
          {node.Relation != '' && (node.Relation == 'H' || node.Relation == 'W') && (
            <span style= { { color: "gray" }}>  (Spouse)  </span>
            )}
          {node.Relation != '' && (node.Relation == 'S') && (
            <span style= { { color: "blue" }}>  (Son)  </span>
            )}
          {node.Relation != '' && (node.Relation == 'D') && (
            <span style= { { color: "pink" }}>  (Daughter)  </span>
            )}
        {node.children.length > 0 && (
        <InfoCircleOutlined
        style={{ color: "gray", fontSize: 20, }}
                    onClick={() => showMemberDetails(props, node)}
        />
        )}


        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
