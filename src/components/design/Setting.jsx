import React, { useContext, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Input, Radio, Row, message, Upload, Col, Slider } from "antd";
import { DesignContext } from "../../context/DesignContext";
import { storage } from "../../config/firebaseConfig";

import "./Setting.Module.css";

// functions of image upload
// check is image or not and check size <5mb
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt25 = file.size / 1024 / 1024 < 5;
  if (!isLt25) {
    message.error("Image must smaller than 5MB!");
  }

  return isJpgOrPng && isLt25;
};

const Setting = () => {
  const {
    changeshirtColor,
    changeUrl,
    changeText1,
    changeText2,
    changeText1Color,
    changeText2Color,
    changeTextSize,
    design,
  } = useContext(DesignContext);

  const handleChangeColor = (event) => {
    console.log(event.target.value);
    changeshirtColor(event.target.value);
  };

  const handleChangeText1 = (event) => {
    changeText1(event.target.value);
  };
  const handleChangeText2 = (event) => {
    changeText2(event.target.value);
  };
  const handleChangeText1Color = (event) => {
    changeText1Color(event.target.value);
  };
  const handleChangeText2Color = (event) => {
    changeText2Color(event.target.value);
  };
  const handleChangeTextSize = (value) => {
    changeTextSize(value/2);
  };

  const fontFormatter = (value) => `${value/2}px`;

  const [loading, setLoading] = useState(false);

  const handleChangeImage = (file) => {
    const storageRef = ref(storage, `/files/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => changeUrl(url));
        setLoading(false);
      }
    );
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Tải ảnh lên
      </div>
    </div>
  );

  return (
    <div className="setting">
      <Row className="settingLabel">Setting</Row>
      {/* color */}
      <Row className="color">
        <Row>Chọn màu áo</Row>
        <Radio.Group onChange={handleChangeColor}>
          <Row gutter={[8, 8]} justify="space-between">
            <Col span={4}>
              <Radio.Button
                value="black"
                style={{ backgroundColor: "black" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="gray"
                style={{ backgroundColor: "#a5a5a5" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="lightgray"
                style={{ backgroundColor: "#e8e8e8" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="white"
                style={{ backgroundColor: "white" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="pink"
                style={{ backgroundColor: "#ffdade" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="turquoise"
                style={{ backgroundColor: "#9bd8ca" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="red"
                style={{ backgroundColor: "#da2021" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="orange"
                style={{ backgroundColor: "#db6a22" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="yellow"
                style={{ backgroundColor: "#ebdc23" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="green"
                style={{ backgroundColor: "#249322" }}
              ></Radio.Button>
            </Col>

            <Col span={4}>
              <Radio.Button
                value="blue"
                style={{ backgroundColor: "#242178" }}
              ></Radio.Button>
            </Col>
            <Col span={4}>
              <Radio.Button
                value="purple"
                style={{ backgroundColor: "#542152" }}
              ></Radio.Button>
            </Col>
          </Row>
        </Radio.Group>
      </Row>

      {/* texts + text color */}
      <Row className="text" gutter={[8, 8]}>
        <Col span={16}>
          Nhập chữ hàng trên
          <Input
            placeholder="Điền chữ bên trên"
            onChange={handleChangeText1}
            value={design.text1}
          ></Input>
        </Col>
        <Col span={7} offset={1}>
          Màu chữ
          <Input
            placeholder="Điền mã màu"
            onChange={handleChangeText1Color}
            value={design.text1Color}
          ></Input>
        </Col>
        <Col span={16}>
          Nhập chữ hàng dưới
          <Input
            placeholder="Điền chữ bên dưới"
            onChange={handleChangeText2}
            value={design.text2}
          ></Input>
        </Col>
        <Col span={7} offset={1}>
          Màu chữ
          <Input
            placeholder="Điền mã màu"
            onChange={handleChangeText2Color}
            value={design.text2Color}
          ></Input>
        </Col>
      </Row>

      {/* text size */}
      <div>
        <Row>Điều chỉnh font chữ</Row>
        <Slider
          className="fontSlider"
          onChange={handleChangeTextSize}
          defaultValue={40}
          tipFormatter={fontFormatter}
        />
      </div>

      {/* image */}
      <Row>
        Tải ảnh của bạn lên
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action={handleChangeImage}
          beforeUpload={beforeUpload}
        >
          {uploadButton}
        </Upload>
      </Row>
    </div>
  );
};

export default Setting;
