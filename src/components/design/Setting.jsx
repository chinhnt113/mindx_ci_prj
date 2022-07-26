import React, { useContext, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Input, Radio, Row, message, Upload, Col, Slider, Switch } from "antd";
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
  const { changeDesign, design } = useContext(DesignContext);

  // handle change shirt color, text, text color.
  const onChangeInput = (e) => {
    changeDesign(e.target.value, e.target.name);
  };
  const handleChangeTextSize = (value) => {
    changeDesign(value / 2, "textSize");
  };
  const handleChangeImgSize = (value) => {
    changeDesign(value / 100 + 0.5, "imgScale");
  };
  const handleSwitchType = (checked) => {
    console.log(checked);
    changeDesign(checked, "isTee");
  };

  const fontFormatter = (value) => `${value / 2}px`;

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
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          changeDesign(url, "url")
        );
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
      {/* type */}
      <Row>
        <Col span={6}>Chọn kiểu áo</Col>
        <Col span={12}>
          <Switch
            name="type"
            checkedChildren="T-Shirt"
            unCheckedChildren="Hoodie"
            defaultChecked
            onChange={handleSwitchType}
          />
        </Col>
      </Row>

      {/* color */}
      <Row className="color">
        <Row>Chọn màu áo</Row>
        <Radio.Group name="shirtColor" onChange={onChangeInput}>
          <Row
            gutter={[8, 8]}
            justify="space-between"
            style={{ overflow: "hidden" }}
          >
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
            name="text1"
            placeholder="Điền chữ bên trên"
            onChange={onChangeInput}
            value={design.text1}
          ></Input>
        </Col>
        <Col span={7} offset={1}>
          Màu chữ
          <Input
            name="text1Color"
            placeholder="Điền mã màu"
            onChange={onChangeInput}
            value={design.text1Color}
          ></Input>
        </Col>
        <Col span={16}>
          Nhập chữ hàng dưới
          <Input
            name="text2"
            placeholder="Điền chữ bên dưới"
            onChange={onChangeInput}
            value={design.text2}
          ></Input>
        </Col>
        <Col span={7} offset={1}>
          Màu chữ
          <Input
            name="text2Color"
            placeholder="Điền mã màu"
            onChange={onChangeInput}
            value={design.text2Color}
          ></Input>
        </Col>
      </Row>

      {/* text size */}
      <div>
        <Row>Điều chỉnh font chữ</Row>
        <Slider
          name="textSize"
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
          name="image"
          listType="picture-card"
          className="image-uploader"
          showUploadList={false}
          action={handleChangeImage}
          beforeUpload={beforeUpload}
        >
          {uploadButton}
        </Upload>
      </Row>
      <Slider
        name="imgScale"
        className="fontSlider"
        onChange={handleChangeImgSize}
        defaultValue={50}
      />
    </div>
  );
};

export default Setting;
