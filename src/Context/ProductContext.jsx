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
    isSingleLoading: false,
    SingleProduct: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "API_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET-SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const SingleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
