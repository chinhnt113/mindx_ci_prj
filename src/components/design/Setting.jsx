import React, { useContext, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Input,
  Radio,
  Row,
  message,
  Upload,
  Col,
  Slider,
  Switch,
  Button,
} from "antd";
import { DesignContext } from "../../context/DesignContext";
import { ColorPicker } from "./DisplayElements";
import { storage } from "../../config/firebaseConfig";

import "./Setting.Module.css";
import html2canvas from "html2canvas";

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
  const [loading, setLoading] = useState(false);

  // handle change shirt color, text, text color.
  const onChangeInput = (e) => {
    changeDesign(e.target.value, e.target.name);
  };
  const handleChangeTextSize = (value) => {
    changeDesign(value / 2, "textSize");
  };
  const handleChangeImgSize = (value) => {
    changeDesign(`${value + 50}%`, "imgScale");
  };
  const handleSwitchType = (checked) => {
    changeDesign(checked, "isTee");
  };

  const fontFormatter = (value) => `${value * 2}%`; // slider format
  const imgFormatter = (value) => `${value + 50}%`; // slider format

  // import ảnh
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

  // export
  function ExportDesignAsImage() {
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "MyDesign.png");
    let data = document.querySelector(".designShirt");
    html2canvas(data, {
      useCORS: true,
    }).then((canvas) => {
      var image = canvas.toDataURL("image/png", 2.0);
      let url = image.replace(
        /^data:image\/png/,
        "data:application/octet-stream"
      );
      downloadLink.setAttribute("href", url);
      downloadLink.click();
    });
  }

  return (
    <div className="setting">
      <Row className="settingLabel">Setting</Row>
      {/* type */}
      <Row>
        <Col>Chọn kiểu áo</Col>
        <Col offset={1}>
          <Switch
            name="type"
            style={{ backgroundImage: `var(--gradient)` }}
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
            {ColorPicker.map((color, index) => (
              <Col span={4} key={index}>
                <Radio.Button
                  value={color.name}
                  style={{ backgroundColor: `${color.code}` }}
                ></Radio.Button>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Row>
      {/* texts + text color */}
      <Row className="text" gutter={[8, 8]}>
        <Col span={13}>
          Nhập chữ hàng trên
          <Input
            name="text1"
            placeholder="Điền chữ bên trên"
            onChange={onChangeInput}
            value={design.text1}
          ></Input>
        </Col>
        <Col span={10} offset={1}>
          Màu chữ
          <Row wrap={false}>
            <Col span={6}>
              <Input
                style={{ padding: "0 2px" }}
                name="text1Color"
                type="color"
                value={design.text1Color}
                onChange={onChangeInput}
              />
            </Col>
            <Col span={18}>
              <Input
                name="text1Color"
                placeholder="Điền mã màu"
                onChange={onChangeInput}
                value={design.text1Color}
              ></Input>
            </Col>
          </Row>
        </Col>
        <Col span={13}>
          Nhập chữ hàng dưới
          <Input
            name="text2"
            placeholder="Điền chữ bên dưới"
            onChange={onChangeInput}
            value={design.text2}
          ></Input>
        </Col>
        <Col span={10} offset={1}>
          Màu chữ
          <Row wrap={false}>
            <Col span={6}>
              <Input
                style={{ padding: "0 2px" }}
                name="text2Color"
                type="color"
                value={design.text2Color}
                onChange={onChangeInput}
              />
            </Col>
            <Col span={18}>
              <Input
                name="text2Color"
                placeholder="Điền mã màu"
                onChange={onChangeInput}
                value={design.text2Color}
              ></Input>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* text size */}
      <div>
        <Row>Điều chỉnh kích cỡ chữ</Row>
        <Slider
          name="textSize"
          className="fontSlider"
          trackStyle={{ backgroundImage: `var(--gradient)` }}
          handleStyle={{ borderColor: "#f39237" }}
          onChange={handleChangeTextSize}
          defaultValue={40}
          tipFormatter={fontFormatter}
        />
      </div>
      {/* image */}
      <Row>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
          Điều chỉnh kích cỡ ảnh
          <Slider
            tipFormatter={imgFormatter}
            name="imgScale"
            trackStyle={{ backgroundImage: `var(--gradient)` }}
            handleStyle={{ borderColor: "#f39237" }}
            className="fontSlider"
            onChange={handleChangeImgSize}
            defaultValue={50}
          />
        </Col>
      </Row>

      <Button
        className="btn btn-save"
        onClick={(e) => {
          e.preventDefault();
          ExportDesignAsImage();
        }}
      >
        Lưu thiết kế này!
      </Button>
    </div>
  );
};

export default Setting;
