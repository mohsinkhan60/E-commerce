export const productReducer = (state, action) => {
   
switch (action.type) {
   case "API_LOADING":
      return { ...state, isloading: true };
   case "SET_API_DATA": {
      const featureData = action.payload.filter((curelem) => {
         return curelem.featured === true;
      });
      return { ...state, isloading: false, products: action.payload, featureProducts: featureData };
   }
   case "API_ERROR":
      return { ...state, isloading: false, isError: true };
   default:
      return state;
}
};
export default productReducer;