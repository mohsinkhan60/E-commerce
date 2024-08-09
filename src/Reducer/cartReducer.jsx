const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
};

export const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product?.name,
        color,
        amount,
        image: product?.image[0]?.url,
        price: product?.price,
        max: product?.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_DECREASE") {
    let updatedProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decAmount = curItem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curItem,
          amount: decAmount,
        };
      }
      return curItem;
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_INCREASE") {
    let updatedProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let IncAmount = curItem.amount + 1;

        if (IncAmount >= curItem.max) {
          IncAmount = curItem.max;
        }
        return {
          ...curItem,
          amount: IncAmount,
        };
      }
      return curItem;
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_items: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_AMOUNT") {
    let updatedAmount = state.cart.reduce((initialVal, curElem) => {
      let { amount, price } = curElem;
      initialVal = initialVal + amount * price;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_amount: updatedAmount,
    };
  }

  return state;
};

export default cartReducer;
