/* eslint-disable react/prop-types */
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Mohsin">{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };