import { createContext, useState } from "react";

export const ContextStore = createContext({});

const Prov = ({ children }) => {
  const [isList, setIsList] = useState(true);

  const changeVis = () => {
    setIsList(!isList);
  };

  return (
    <ContextStore.Provider value={{ isList, changeVis }}>
      {children}
    </ContextStore.Provider>
  );
};

export default Prov;
