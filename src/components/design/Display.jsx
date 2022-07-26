import { Row } from "antd";
import React, { useContext } from "react";
import "./Display.Module.css";
import { DesignContext } from "../../context/DesignContext";
import BlackShirt from "../../asset/img/black.png";
import BlueShirt from "../../asset/img/blue.png";
import GrayShirt from "../../asset/img/gray.png";
import GreenShirt from "../../asset/img/green.png";
import LightGrayShirt from "../../asset/img/lightgray.png";
import OrangeShirt from "../../asset/img/orange.png";
import PinkShirt from "../../asset/img/pink.png";
import PurpleShirt from "../../asset/img/purple.png";
import RedShirt from "../../asset/img/red.png";
import TurquoiseShirt from "../../asset/img/turquoise.png";
import WhiteShirt from "../../asset/img/white.png";
import YellowShirt from "../../asset/img/yellow.png";

import BlackHoodie from "../../asset/img/hoodieblack (1).png";
import BlueHoodie from "../../asset/img/hoodieblue (1).png";
import GrayHoodie from "../../asset/img/hoodiegray (1).png";
import GreenHoodie from "../../asset/img/hoodiegreen (1).png";
import LightGrayHoodie from "../../asset/img/hoodielightgray (1).png";
import OrangeHoodie from "../../asset/img/hoodieorange (1).png";
import PinkHoodie from "../../asset/img/hoodiepink (1).png";
import PurpleHoodie from "../../asset/img/hoodiepurple (1).png";
import RedHoodie from "../../asset/img/hoodiered (1).png";
import TurquoiseHoodie from "../../asset/img/hoodieturquoise (1).png";
import WhiteHoodie from "../../asset/img/hoodiewhite (1).png";
import YellowHoodie from "../../asset/img/hoodieyellow (1).png";

import BlackHoodieString from "../../asset/img/hoodieblack (2).png";
import BlueHoodieString from "../../asset/img/hoodieblue (2).png";
import GrayHoodieString from "../../asset/img/hoodiegray (2).png";
import GreenHoodieString from "../../asset/img/hoodiegreen (2).png";
import LightGrayHoodieString from "../../asset/img/hoodielightgray (2).png";
import OrangeHoodieString from "../../asset/img/hoodieorange (2).png";
import PinkHoodieString from "../../asset/img/hoodiepink (2).png";
import PurpleHoodieString from "../../asset/img/hoodiepurple (2).png";
import RedHoodieString from "../../asset/img/hoodiered (2).png";
import TurquoiseHoodieString from "../../asset/img/hoodieturquoise (2).png";
import WhiteHoodieString from "../../asset/img/hoodiewhite (2).png";
import YellowHoodieString from "../../asset/img/hoodieyellow (2).png";
// eslint-disable-next-line
import Shadow1 from "../../asset/img/shadow1.png";
// eslint-disable-next-line
import Shadow25 from "../../asset/img/shadow25.png";
// eslint-disable-next-line
import Shadow33 from "../../asset/img/shadow33.png";

import ShadowHoodie from "../../asset/img/shadowhoodie.png";

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

  let teeColor = BlackShirt;
  let hoodieColor = BlackHoodie;
  let hoodieColorString = BlackHoodieString;

  switch (shirtColor) {
    case "black":
      hoodieColor = BlackHoodie;
      hoodieColorString = BlackHoodieString;
      teeColor = BlackShirt;
      break;
    case "green":
      hoodieColor = GreenHoodie;
      hoodieColorString = GreenHoodieString;
      teeColor = GreenShirt;
      break;
    case "blue":
      hoodieColor = BlueHoodie;
      hoodieColorString = BlueHoodieString;
      teeColor = BlueShirt;
      break;
    case "gray":
      hoodieColor = GrayHoodie;
      hoodieColorString = GrayHoodieString;
      teeColor = GrayShirt;
      break;
    case "lightgray":
      hoodieColor = LightGrayHoodie;
      hoodieColorString = LightGrayHoodieString;
      teeColor = LightGrayShirt;
      break;
    case "orange":
      hoodieColor = OrangeHoodie;
      hoodieColorString = OrangeHoodieString;
      teeColor = OrangeShirt;
      break;
    case "pink":
      hoodieColor = PinkHoodie;
      hoodieColorString = PinkHoodieString;
      teeColor = PinkShirt;
      break;
    case "purple":
      hoodieColor = PurpleHoodie;
      hoodieColorString = PurpleHoodieString;
      teeColor = PurpleShirt;
      break;
    case "red":
      hoodieColor = RedHoodie;
      hoodieColorString = RedHoodieString;
      teeColor = RedShirt;
      break;
    case "turquoise":
      hoodieColor = TurquoiseHoodie;
      hoodieColorString = TurquoiseHoodieString;
      teeColor = TurquoiseShirt;
      break;
    case "white":
      hoodieColor = WhiteHoodie;
      hoodieColorString = WhiteHoodieString;
      teeColor = WhiteShirt;
      break;
    case "yellow":
      hoodieColor = YellowHoodie;
      hoodieColorString = YellowHoodieString;
      teeColor = YellowShirt;
      break;
    default:
      hoodieColor = GrayHoodie;
      hoodieColorString = GrayHoodieString;
      teeColor = GrayShirt;
      break;
  }

  return (
    <Row className="designShirt">
      {isTee ? (
        <>
          {shirtColor === "white" ? (
            <div className="shadowShirt upperShadow">
              <img src={Shadow1} alt="tshirt-shadow" />
            </div>
          ) : (
            <>
              <div className="shadowShirt upperShadow">
                <img src={Shadow33} alt="tshirt-shadow" />
              </div>
              <div className="shadowShirt underShadow">
                <img src={Shadow25} alt="tshirt-shadow" />
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
            <img src={ShadowHoodie} alt="hoodie-shadow" />
          </div>
          <div className="imgShirt">
            <img src={hoodieColor} alt="hoodie-only" />
          </div>
          <div className="imgShirtString upperShadow">
            <img src={hoodieColorString} alt="hoodie-only" />
          </div>
        </>
      )}

      <div className="designItems" style={{ fontSize: `${textSize}px` }}>
        <div className="text1">
          <p style={{ color: `${text1Color}` }}>{text1}</p>
        </div>
        {/* {url === "" ? <img src={Logo} alt="logoimg" /> : <img src={url} alt="logoimg" />} */}
        <img
          src={url}
          alt="logoimg"
          style={{ transform: `scale(${imgScale})` }}
        />
        <div className="text2">
          <p style={{ color: `${text2Color}` }}>{text2}</p>
        </div>
      </div>
    </Row>
  );
};

export default Display;
