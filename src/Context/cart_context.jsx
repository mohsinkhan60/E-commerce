/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("MohsinCart");
  if(newCartData.length === 0){
    return [];
  }else{
    return JSON.parse(newCartData);
  }
}

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_items: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  }

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    localStorage.setItem("MohsinCart", JSON.stringify(state.cart));
  },[state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCartContext };
