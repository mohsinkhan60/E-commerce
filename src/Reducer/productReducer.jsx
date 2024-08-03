export const productReducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return { ...state, isloading: true };
    case "SET_API_DATA": {
      const featureData = action.payload.filter((curelem) => {
        return curelem.featured === true;
      });
      return {
        ...state,
        isloading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    }
    case "API_ERROR":
      return { ...state, isloading: false, isError: true };
    default:
      return state;
    case "SET-SINGLE_LOADING":
      return { ...state, isSingleLoading: true };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        SingleProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return { ...state, isSingleLoading: false, isError: true };
  }
};
export default productReducer;
