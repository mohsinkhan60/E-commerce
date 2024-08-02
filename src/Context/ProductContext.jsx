/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";


const AppProvider = ({ children }) => {
const initialState = {
    isloading: false,
    isError: false,
    products: [],
    featureProducts: [],
}

  const [state, dispatch] = useReducer(reducer, initialState);

const getProducts = async(url) => {
  dispatch({type: "API_LOADING"});
try {
    const res = await axios.get(url);
    const products = await res.data;
    dispatch({type: "SET_API_DATA", payload: products});
} catch (error) {
  dispatch({type: "API_ERROR"});
}
}
  useEffect(() => {
    getProducts(API);
  }, []);
  return <AppContext.Provider value={{...state, }}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };
