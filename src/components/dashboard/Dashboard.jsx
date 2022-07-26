import React from 'react'
import { Row, Col } from 'antd'
import Display from '../design/Display'
import Setting from '../design/Setting'

const Dashboard = () => {
  return (
    <Row>
        <Col span={12} offset={2}>
            <Display/>
        </Col>
        <Col span={6} offset={1}>
            <Setting/>
        </Col>
    </Row>
  )
}

export default Dashboard