import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import filterReducer from "../Reducer/filerReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(AppContext);

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET-GRIDVIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
