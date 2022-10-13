import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DoubleRightOutlined, InfoCircleOutlined, ArrowRightOutlined, PlusCircleOutlined, UserOutlined, StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { Card, Divider, Avatar, Modal, Form, Row, Col } from 'antd';
import "./styles/tree.style.css";

const Tree = ({ data = [] }) => {
//const [treeData, setTreeData] = useState({});
    const [form] = Form.useForm();
  const [selectedRecords, setSelectedRecords] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = async () => {
    const values = await form.validateFields();
    console.log("======values============");
    console.log(values);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedRecords(null);
  };

console.log(data);

  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} isModalVisible={isModalVisible} selectedRecords={selectedRecords} />
        ))}
      </ul>
      {isModalVisible && (
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={500}
          footer={null}
        >
          <Form form={form} layout="vertical">
            <Row gutter={24} style={{ paddingLeft: 10 }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(255, 255, 255)",
                  overflow: "hidden",
                  textAlign: "center",
                  fontSize: "1em",
                }}
              >
                <div
                  style={{
                    padding: "3em 0",
                    backgroundImage: "linear-gradient(70deg, #61a1dd, #0083fd)",
                  }}
                >
                  <img
                    src={selectedRecords?.picture}
                    alt="user-image"
                    style={{
                      width: "7em",
                      height: "7em",
                      borderRadius: "50%",
                      boxShadow: "0 0.6em 1.8em",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ color: "#565656", padding: "2.2em" }}>
                  <div style={{ display: "inline-flex" }}>
                    <h3
                      style={{
                        fontSize: "1.5em",
                        textTransform: "uppercase",
                      }}
                    >
                      {`${selectedRecords?.NAME}`}
                    </h3>
                    <div
                      style={{
                        color: "#278BF3",
                        marginLeft: 15,
                        marginTop: 2,
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      EDIT
                    </div>
                  </div>
                  <p style={{ fontSize: "1em", color: "#9e9e9e" }}>
                    {selectedRecords?.EMAILID}
                  </p>
                  <Row
                    gutter={24}
                    style={{ paddingTop: 30, textAlign: "left" }}
                  >
                    <Col span={8}>Date Of Birth</Col>
                    <Col span={16}>{selectedRecords?.DOB}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Anniversary</Col>
                    <Col span={16}>{selectedRecords?.DOA}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Email</Col>
                    <Col span={16}>{selectedRecords?.EMAILID}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Phone Number</Col>
                    <Col span={16}>{selectedRecords?.PHONENO}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Home Address</Col>
                    <Col span={16}>{selectedRecords?.RESIDENCEADD}</Col>
                    <Col span={16}>{selectedRecords?.RESPHNO}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Office Address</Col>
                    <Col span={16}>{selectedRecords?.OFFICEADD}</Col>
                    <Col span={16}>{selectedRecords?.OFFICEPHNO}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Office Email</Col>
                    <Col span={16}>{selectedRecords?.OFFICEEMAILID}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>In-Laws</Col>
                    <Col span={16}>
                      <div
                        style={{
                          color: "#278BF3",
                          cursor: "pointer",
                          display: "flex",
                        }}
                      >
                        <p>Show Details</p>
                        <ArrowRightOutlined
                          style={{ marginLeft: 10, marginTop: 5 }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Family Member</Col>
                    <Col span={16}>
                      <Row gutter={24}>
                        <Col span={8} style={{ fontWeight: "bold" }}>
                          Father
                        </Col>
                        <Col span={16}>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <p>Test1</p>
                            <PlusCircleOutlined
                              style={{
                                marginLeft: 10,
                                marginTop: 5,
                                color: "red",
                              }}
                              onClick={() => alert("Add More Details")}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row gutter={24} style={{ paddingTop: 10 }}>
                        <Col span={8} style={{ fontWeight: "bold" }}>
                          Mother
                        </Col>
                        <Col span={16}>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <p>Test2</p>
                            <PlusCircleOutlined
                              style={{
                                marginLeft: 10,
                                marginTop: 2,
                                color: "red",
                              }}
                              onClick={() => alert("Add More Details")}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row gutter={24} style={{ paddingTop: 10 }}>
                        <Col span={8} style={{ fontWeight: "bold" }}>
                          Spouse
                        </Col>
                        <Col span={16}>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <p>Test3</p>
                            <PlusCircleOutlined
                              style={{
                                marginLeft: 10,
                                marginTop: 2,
                                color: "red",
                              }}
                              onClick={() => alert("Add More Details")}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                </div>
              </div>
            </Row>
          </Form>
        </Modal>
      )}
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const [selectedRecords, setSelectedRecords] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hasChild = node.children ? true : false;
  console.log(hasChild);

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

        <div id= '${node.No}' className="col d-tree-head">
        <Avatar size="small" icon={<UserOutlined />} />
        <i className={`mr-1 fa fa-folder`}> </i>
          {node.NAME} ({node.Relation})
        <InfoCircleOutlined
        style={{ color: "blue" }}
                    onClick={(e) => {alert(true);
                      setIsModalVisible(true);
                      setSelectedRecords(node);
                    }}
        />
        {(node.MOBILENO != '' || node.EMAILID != '') && (
        <Card size="small" title="">
        {node.MOBILENO != '' && (
                <p>Phone: <span>{node.MOBILENO}</span></p>
            )}
        {node.EMAILID != '' && (
                <p>EMAIL: <span>{node.EMAILID}</span></p>
            )}
    </Card>
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
