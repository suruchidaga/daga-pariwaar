import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DoubleRightOutlined, InfoCircleOutlined, ArrowRightOutlined, PlusCircleOutlined, UserOutlined, StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { Card, Divider, Avatar, List, Modal, Form, Row, Col } from 'antd';
import "../../components/uielements/styles/tree.style.css";
import FamilyDetailsWrapper from "../FamilyDetails/styles";

const MemberDetails = (props) => {
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
    props.modalChange(!props.isModalVisible);
    props.nodeChange(null);
  };

  function replaceWithBr(text) {
    return text.replace(/\n/g, "<br />");
  }

  function checkIfPunyaTithiExists(node) {
    return (node != null && node.PunyaThitii != '') ? true : false;
  }


console.log(props);

  return (

        <Modal
          visible={props.isModalVisible}
          onOk={handleOk}
          onCancel={e => {
            e.stopPropagation();
            handleCancel()}
          }
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
                    src={props.selectedRecords?.picture}
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
                <div style={{ color: "#565656", padding: "2.2em", whiteSpace: "pre-wrap" }}>
                  <div style={{ display: "inline-flex" }}>
                    <h3
                      style={{
                        fontSize: "1.5em",
                      }}
                    >
                      {`${props.selectedRecords?.NAME}`} & {`${props.selectedRecords?.SPOUSE}`}
                    </h3>

                  </div>
                  <p style={{ fontSize: "1em", color: "#9e9e9e", textTransform: "lowercase" }}>
                    {props.selectedRecords?.EMAILID}
                  </p>
                  <Row
                    gutter={24}
                    style={{ paddingTop: 30, textAlign: "left" }}
                  >
                    <Col span={8}>Date Of Birth</Col>
                    <Col span={16}>{props.selectedRecords?.DOB}</Col>
                  </Row>
                  {(checkIfPunyaTithiExists(props.selectedRecords)) && (
                  <Row
                    gutter={24}
                    style={{ paddingTop: 30, textAlign: "left" }}
                  >
                    <Col span={8}>PunyaThitii</Col>
                    <Col span={16}>{props.selectedRecords?.PunyaThitii}</Col>
                  </Row>
                  )}
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Anniversary</Col>
                    <Col span={16}>{props.selectedRecords?.DOA}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Email</Col>
                    <Col span={16}>{props.selectedRecords?.EMAILID}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Phone Number</Col>
                    <Col span={16}>{props.selectedRecords?.MOBILENO}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Home Address</Col>
                    <Col span={16}>{props.selectedRecords?.RESADD}<br/>{props.selectedRecords?.RESPHNO}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Office Address</Col>
                    <Col span={16}>{props.selectedRecords?.OFFICEADD}<br/>{props.selectedRecords?.OFFICEPHNO}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Office Email</Col>
                    <Col span={16}>{props.selectedRecords?.OFFICEEMAILID}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Family Member</Col>
                    <Col span={16}>
                  <List
                    header={<div></div>}
                    footer={<div></div>}
                    bordered
                    dataSource={props.selectedRecords?.children}
                    renderItem={bObj => (
                        <List.Item>
                        {(bObj.Relation == 'H' || bObj.Relation == 'W') && (
                            <p><b>Spouse:</b> <span>{bObj.NAME}</span><br/>
                                <span><b>D.O.B:</b> {bObj.DOB}</span><br/>
                                <span><b>Mobile No.:</b>{bObj.MOBILENO}</span><br/>
                                <span style={{ textTransform: "lowercase",}}><b>{bObj.EMAILID}</b></span><br/>
                            </p>
                        )}
                        {(bObj.Relation == 'S') && (
                            <p><b>Son:</b> <span style={{ textTransform: "capitalize",}}>{bObj.NAME}</span><br/>
                                <span><b>D.O.B:</b> {bObj.DOB}</span><br/>
                                <span><b>Mobile No.:</b>{bObj.MOBILENO}</span><br/>
                                <span style={{ textTransform: "lowercase",}}><b>{bObj.EMAILID}</b></span><br/>
                            </p>
                        )}
                        {(bObj.Relation == 'D') && (
                            <p><b>Daughter:</b> <span>{bObj.NAME}</span><br/>
                                <span><b>D.O.B:</b> {bObj.DOB}</span><br/>
                                <span><b>Mobile No.:</b>{bObj.MOBILENO}</span><br/>
                                <span style={{ textTransform: "lowercase",}}><b>{bObj.EMAILID}</b></span><br/>
                            </p>
                        )}



                        </List.Item>
                     )}
                  />
                  </Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>In-Laws</Col>
                    <Col span={16}>{props.selectedRecords?.FATHERINLAW}<br/>{props.selectedRecords?.MOTHERINLAW}</Col>
                  </Row>


                  <Divider style={{ margin: "15px 0" }} />
                </div>
              </div>
            </Row>
          </Form>
        </Modal>

  );
};

export default MemberDetails;
