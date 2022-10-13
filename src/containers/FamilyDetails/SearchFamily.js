import { useState } from "react";
import { Avatar, List, Divider, Modal, Form, Row, Col } from "antd";
import {
  InfoCircleOutlined,
  ArrowRightOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { familyDetails } from "./mockData";

export default function SearchFamily() {
  const [form] = Form.useForm();
  const [selectedRecords, setSelectedRecords] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [q, setQ] = useState("");
  const [searchParam] = useState([
    "husbandName",
    "wifeName",
    "husbandPhoneNumber",
    "wifePhoneNumber",
    "city",
  ]);

  const data = Object.values(familyDetails);

  const search = (items) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  const handleOk = async () => {
    const values = await form.validateFields();
    console.log("======values============");
    console.log(values);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedRecords(null);
  };

  return (
    <div className="wrapper">
      <div className="search-wrapper">
        <label htmlFor="search-form" style={{ width: "100%" }}>
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search Name, Number, City"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </label>
      </div>
      <ul className="card-grid">
        {search(data).map((item, i) => (
          <li key={i}>
            <article className="card" style={{ padding: 5 }}>
              <List.Item
                actions={[
                  <InfoCircleOutlined
                    style={{ color: "blue" }}
                    onClick={() => {
                      setIsModalVisible(true);
                      setSelectedRecords(item?.husbandDetails);
                    }}
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item?.husbandDetails?.picture} />}
                  title={item?.husbandName}
                />
              </List.Item>
              <Divider style={{ margin: 0 }} />
              <List.Item
                actions={[
                  <InfoCircleOutlined
                    style={{ color: "blue" }}
                    onClick={() => {
                      setIsModalVisible(true);
                      setSelectedRecords(item?.wifeDetails);
                    }}
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item?.wifeDetails?.picture} />}
                  title={item?.wifeName}
                />
              </List.Item>
            </article>
          </li>
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
                      {`${selectedRecords?.first} ${selectedRecords?.last}`}
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
                    {selectedRecords?.email}
                  </p>
                  <Row
                    gutter={24}
                    style={{ paddingTop: 30, textAlign: "left" }}
                  >
                    <Col span={8}>Date Of Birth</Col>
                    <Col span={16}>{selectedRecords?.dateOfBirth}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Anniversary</Col>
                    <Col span={16}>{selectedRecords?.anniversaryDate}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Email</Col>
                    <Col span={16}>{selectedRecords?.email}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Phone Number</Col>
                    <Col span={16}>{selectedRecords?.phoneNumber}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Home Address</Col>
                    <Col span={16}>{selectedRecords?.homeAddress}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Work Address</Col>
                    <Col span={16}>{selectedRecords?.workAddress}</Col>
                  </Row>
                  <Divider style={{ margin: "15px 0" }} />
                  <Row gutter={24} style={{ textAlign: "left" }}>
                    <Col span={8}>Occupation</Col>
                    <Col span={16}>{selectedRecords?.occupation}</Col>
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
}
