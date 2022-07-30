import { Row } from "antd";
import React, { useContext } from "react";
import "./Display.Module.css";
import { DesignContext } from "../../context/DesignContext";
// import ShirtImg from "./ShirtImg";
import {
  ShirtImg,
  designItemsStyleTee,
  designItemsStyleHoodie,
} from "./DisplayElements";

const Display = () => {
  const { design } = useContext(DesignContext);
  const {
    isTee,
    shirtColor,
    url,
    imgScale,
    text1,
    text2,
    text1Color,
    text2Color,
    textSize,
  } = design;

  let teeColor = ShirtImg.BlackShirt;
  let hoodieColor = ShirtImg.BlackHoodie;
  let hoodieColorString = ShirtImg.BlackHoodieString;
  switch (shirtColor) {
    case "black":
      hoodieColorString = ShirtImg.BlackHoodieString;
      hoodieColor = ShirtImg.BlackHoodie;
      teeColor = ShirtImg.BlackShirt;
      break;
    case "green":
      hoodieColorString = ShirtImg.GreenHoodieString;
      hoodieColor = ShirtImg.GreenHoodie;
      teeColor = ShirtImg.GreenShirt;
      break;
    case "blue":
      hoodieColorString = ShirtImg.BlueHoodieString;
      hoodieColor = ShirtImg.BlueHoodie;
      teeColor = ShirtImg.BlueShirt;
      break;
    case "gray":
      hoodieColorString = ShirtImg.GrayHoodieString;
      hoodieColor = ShirtImg.GrayHoodie;
      teeColor = ShirtImg.GrayShirt;
      break;
    case "lightgray":
      hoodieColorString = ShirtImg.LightGrayHoodieString;
      hoodieColor = ShirtImg.LightGrayHoodie;
      teeColor = ShirtImg.LightGrayShirt;
      break;
    case "orange":
      hoodieColorString = ShirtImg.OrangeHoodieString;
      hoodieColor = ShirtImg.OrangeHoodie;
      teeColor = ShirtImg.OrangeShirt;
      break;
    case "pink":
      hoodieColorString = ShirtImg.PinkHoodieString;
      hoodieColor = ShirtImg.PinkHoodie;
      teeColor = ShirtImg.PinkShirt;
      break;
    case "purple":
      hoodieColorString = ShirtImg.PurpleHoodieString;
      hoodieColor = ShirtImg.PurpleHoodie;
      teeColor = ShirtImg.PurpleShirt;
      break;
    case "red":
      hoodieColorString = ShirtImg.RedHoodieString;
      hoodieColor = ShirtImg.RedHoodie;
      teeColor = ShirtImg.RedShirt;
      break;
    case "turquoise":
      hoodieColorString = ShirtImg.TurquoiseHoodieString;
      hoodieColor = ShirtImg.TurquoiseHoodie;
      teeColor = ShirtImg.TurquoiseShirt;
      break;
    case "white":
      hoodieColorString = ShirtImg.WhiteHoodieString;
      hoodieColor = ShirtImg.WhiteHoodie;
      teeColor = ShirtImg.WhiteShirt;
      break;
    case "yellow":
      hoodieColorString = ShirtImg.YellowHoodieString;
      hoodieColor = ShirtImg.YellowHoodie;
      teeColor = ShirtImg.YellowShirt;
      break;
    default:
      hoodieColorString = ShirtImg.GrayHoodieString;
      hoodieColor = ShirtImg.GrayHoodie;
      teeColor = ShirtImg.GrayShirt;
      break;
  }

  // about design things
  let designItemsStyle = designItemsStyleTee;
  switch (isTee) {
    case true:
      designItemsStyle = designItemsStyleTee;
      break;
    case false:
      designItemsStyle = designItemsStyleHoodie;
      break;
    default:
      break;
  }

  return (
    <Row className="designShirt">
      {/* Áo trơn */}
      {isTee ? (
        <>
          {shirtColor === "white" ? (
            <div className="shadowShirt upperShadow">
              <img src={ShirtImg.Shadow1} alt="tshirt-shadow" />
            </div>
          ) : (
            <>
              <div className="shadowShirt upperShadow">
                <img src={ShirtImg.Shadow33} alt="tshirt-shadow" />
              </div>
              <div className="shadowShirt underShadow">
                <img src={ShirtImg.Shadow25} alt="tshirt-shadow" />
              </div>
            </>
          )}
          <div className="imgShirt">
            <img src={teeColor} alt="tshirt-only" />
          </div>
        </>
      ) : (
        <>
          <div className="shadowShirt upperShadow">
            <img src={ShirtImg.ShadowHoodie} alt="hoodie-shadow" />
          </div>
          <div className="imgShirt">
            <img src={hoodieColor} alt="hoodie-only" />
          </div>
          <div className="imgShirtString upperShadow">
            <img src={hoodieColorString} alt="hoodie-only" />
          </div>
        </>
      )}

      {/* Các item */}
      <div
        className="designItems"
        style={{ ...designItemsStyle, fontSize: `${textSize}px` }}
      >
        {/* Text trên */}
        <div className="text1">
          <p style={{ color: `${text1Color}` }}>{text1}</p>
        </div>
        {/* ảnh */}
        <img src={url} alt="logoimg" style={{ width: `${imgScale}` }} />
        {/* text dưới */}
        <div className="text2">
          <p style={{ color: `${text2Color}` }}>{text2}</p>
        </div>
      </div>
    </Row>
  );
};

export default Display;
