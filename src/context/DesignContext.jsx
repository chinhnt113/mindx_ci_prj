import { createContext, useState } from "react";
import BlackShirt from "../asset/img/black.png";

export const DesignContext = createContext();

const DesignContextProvider = ({ children }) => {
  // State
  const [design, setDesign] = useState({
    shirtColor: "pink",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png",
    text1: "Hello",
    text2: "World",
  });

  // handle change design
  const changeshirtColor = (shirtColor) => {
    setDesign({
      ...design,
      shirtColor: shirtColor,
    });
  };
  const changeUrl = (url) => {
    setDesign({
      ...design,
      url: url,
    });
  };
  const changeText1 = (text1) => {
    setDesign({
      ...design,
      text1: text1,
    });
  };
  const changeText2 = (text2) => {
    setDesign({
      ...design,
      text2: text2,
    });
  };

  // context data
  const designContextData = {
    design,
    changeshirtColor,
    changeUrl,
    changeText1,
    changeText2
  };

  // return provider
  return (
    <DesignContext.Provider value={designContextData}>
      {children}
    </DesignContext.Provider>
  );
};

export default DesignContextProvider;
