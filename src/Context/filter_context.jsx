/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import filterReducer from "../Reducer/filerReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(AppContext);

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setGridView = () => dispatch({ type: "SET_GRID_VIEW" });
  const setListView = () => dispatch({ type: "SET_LIST_VIEW" });
  const updateFilterValue = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters, state.all_products]);

  // useEffect(() => {
  //   dispatch({ type: "FILTER_PRODUCTS" });
  //   dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  // }, [products, state.filters]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateFilterValue, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
