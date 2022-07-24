import React, { useContext, useState } from "react";
import { Input, Radio, Row } from "antd";
import { DesignContext } from "../../context/DesignContext";

const Setting = () => {
  // const [text1, setText1] = useState('')
  // const [text2, setText2] = useState("");

  const { changeshirtColor, changeText1, changeText2, design } = useContext(DesignContext);

  const handleChangeColor = (event) => {
    console.log(event.target.value)
    changeshirtColor(event.target.value)
  }

  const handleChangeText1 = (event) => {
    changeText1(event.target.value);
  };
  const handleChangeText2 = (event) => {
    changeText2(event.target.value);
  };

  return (
    <>
      <Row>Setting</Row>
      <div className="color">
        Color pick
        <Radio.Group
          onChange={handleChangeColor}
        >
          <Radio.Button
            value="white"
            style={{ backgroundColor: "white" }}
          ></Radio.Button>
          <Radio.Button
            value="black"
            style={{ backgroundColor: "black" }}
          ></Radio.Button>
          <Radio.Button
            value="gray"
            style={{ backgroundColor: "#a5a5a5" }}
          ></Radio.Button>
          <Radio.Button
            value="purple"
            style={{ backgroundColor: "#542152" }}
          ></Radio.Button>
          <Radio.Button
            value="pink"
            style={{ backgroundColor: "#ffdade" }}
          ></Radio.Button>
          <Radio.Button
            value="orange"
            style={{ backgroundColor: "#db6a22" }}
          ></Radio.Button>
          <Radio.Button
            value="lightgray"
            style={{ backgroundColor: "#e8e8e8" }}
          ></Radio.Button>
          <Radio.Button
            value="green"
            style={{ backgroundColor: "#249322" }}
          ></Radio.Button>
          <Radio.Button
            value="blue"
            style={{ backgroundColor: "#242178" }}
          ></Radio.Button>
          <Radio.Button
            value="yellow"
            style={{ backgroundColor: "#ebdc23" }}
          ></Radio.Button>
          <Radio.Button
            value="turquoise"
            style={{ backgroundColor: "#9bd8ca" }}
          ></Radio.Button>
          <Radio.Button
            value="red"
            style={{ backgroundColor: "#da2021" }}
          ></Radio.Button>
        </Radio.Group>
      </div>
      <Input placeholder="text1" onChange={handleChangeText1} value={design.text1}></Input>
      <Input placeholder="text2" onChange={handleChangeText2} value={design.text2}></Input>
    </>
  );
};

export default Setting;
