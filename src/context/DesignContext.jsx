import { createContext, useState } from "react";

export const DesignContext = createContext();

const DesignContextProvider = ({ children }) => {
  // State
  const [design, setDesign] = useState({
    isTee: true,
    shirtColor: "yellow",
    url: "http://pngimg.com/uploads/minions/minions_PNG80.png",
    imgScale: "100%",
    text1: "Tulaliloo",
    text1Color: "#111111",
    text2: "ti amoo",
    text2Color: "#111111",
    textSize: 24,
  });

  // handle change design
  const changeDesign = (value, stateName) => {
    setDesign({
      ...design,
      [stateName]: value,
    });
  };
  
  // context data
  const designContextData = {
    design,
    changeDesign,
  };

  // return provider
  return (
    <DesignContext.Provider value={designContextData}>
      {children}
    </DesignContext.Provider>
  );
};

export default DesignContextProvider;
