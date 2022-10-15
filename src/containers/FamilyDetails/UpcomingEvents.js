import { useEffect, useState } from "react";
import { Typography , Card, Avatar, List, Divider, Modal, Form, Row, Col } from "antd";
import {
  InfoCircleOutlined,
  ArrowRightOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const UpcomingEvents = (props) => {
  // State variable declartion
  //const classes = useStyles();
  const todayDate = new Date();
  const [birthdayData, setBirthdayData] = useState([]);
  const [anniversaryData, setAnniversaryData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  // useEffect will call each time currentDate changes
  useEffect(() => {
    getBirthdayData(currentDate);
    getAnniversaryData(currentDate);
    // eslint-disable-next-line
  }, [currentDate]);

  // Calculating the age
  const getDate = (eventDateStr) => {
    const [day, month, year] = eventDateStr.split('.');
    const date = new Date(+year, month - 1, +day);
    //console.log(date);
    return date;
  };

  const getDateName = (eventDateStr) => {
    const date = getDate(eventDateStr);
    const nameOfMonth = date.toLocaleString('default', {
  month: 'long',
});
    return date.getDate() + " " + nameOfMonth;
  };

  const getAge = (eventDateStr) => {
    const date = getDate(eventDateStr);
    const todayDate = new Date();
    const diff = todayDate.getTime() - date.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)) + 1;
  };

  const titleCase = (str) => {
   if (typeof str !== 'undefined') {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    } else {
        return "";
    }
}

  // Filtering the current date data
  const getBirthdayData = (date) => {
    const filtedData = props.familyData.filter(
      (obj) =>
        (getDate(obj.DOB).getDate() >= date.getDate() &&
        getDate(obj.DOB).getMonth() === date.getMonth() &&
        obj.PunyaThitii == '') /*||
        (//new Date(obj.DOA).getDate() === date.getDate() &&
        new Date(obj.DOA).getMonth() === date.getMonth())*/
    );
    setBirthdayData(filtedData);
  };

  // Filtering the current date data
  const getAnniversaryData = (date) => {
    const filtedData = props.familyData.filter(
      (obj) =>
        ((obj.DOA != '' && getDate(obj.DOA).getDate()) >= date.getDate() &&
        (obj.DOA != '' && getDate(obj.DOA).getMonth()) === date.getMonth()) /*||
        (//new Date(obj.DOA).getDate() === date.getDate() &&
        new Date(obj.DOA).getMonth() === date.getMonth())*/
    );
    setAnniversaryData(filtedData);
  };

  // Handles the next date navigation
  const handleNext = () => {
    const nextDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    setCurrentDate(nextDate);
  };

  // Handles the previous date navigation
  const handlePrev = () => {
    const prevDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
    setCurrentDate(prevDate);
  };
  // Rendering components
  return (
    <>

    <Card>
        <List
      header={<div>Upcoming Birthdays</div>}
      footer={<div></div>}
      bordered
      dataSource={birthdayData}
      renderItem={bObj => (
        <List.Item>
          <Typography.Text><span style={{fontWeight:'bold'}}>{titleCase(bObj.NAME)}</span> turns {getAge(bObj.DOB)} on {getDateName(bObj.DOB)}....Say Hi
          {(bObj.MOBILENO != '') && (
          <span> @ <a href={'tel:'+ bObj.MOBILENO}>{bObj.MOBILENO}</a></span>
          )}
          </Typography.Text>
        </List.Item>
      )}
    />
    </Card>

    <Card>
        <List
      header={<div>Upcoming Anniversaries</div>}
      footer={<div></div>}
      bordered
      dataSource={anniversaryData}
      renderItem={bObj => (
        <List.Item>
          <Typography.Text><span style={{fontWeight:'bold'}}>{titleCase(bObj.NAME)} 's</span> anniversary  on {bObj.DOA}</Typography.Text>
        </List.Item>
      )}
    />
    </Card>
    </>

  );
};

export default UpcomingEvents;
