import React from "react";
import { Row, Col } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Display from "../design/Display";
import Setting from "../design/Setting";

const Dashboard = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Row>
        <Col span={12} offset={2}>
          <Display />
        </Col>
        <Col span={7} offset={1}>
          <Setting />
        </Col>
      </Row>
    </DndProvider>
  );
};

export default Dashboard;
