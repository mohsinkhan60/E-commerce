import { useFilterContext } from "../Context/filter_context";
import GridView from "./GridView";

const ProductList = () => {
  const { filter_products, setGridView } = useFilterContext();
  if (setGridView) {
    return <GridView products={filter_products} />;
  }
  // if (setGridView === true) {
  //   return <ListView products={filter_products} />;
  // }
};
export default ProductList;
