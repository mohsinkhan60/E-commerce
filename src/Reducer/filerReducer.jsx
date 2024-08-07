export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        all_products: [...action.payload],
        filter_products: [...action.payload],
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "UPDATE_FILTER_VALUE": {
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }
    case "FILTER_PRODUCTS": {
      const { all_products } = state;
      const { text, category, company, colors } = state.filters;
      let filteredProducts = [...all_products];

      if (text) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (category && category !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === category
        );
      }

      if (company && company !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.company === company
        );
      }
      
      if(colors && colors !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.colors.includes(colors));
      }
      return {
        ...state,
        filter_products: filteredProducts,
      };
    }
    
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          text: "",
          category: "all",
          company: "all",
          colors: "all",
        },
      };


    default:
      return state;
  }
};

export default filterReducer;
