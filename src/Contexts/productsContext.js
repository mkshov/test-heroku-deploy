import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();
// const API = "http://localhost:8000/data";
const API = " https://makers-deploy-emir.herokuapp.com/"
const INIT_STATE = {
  products: [],
  oneProduct: null,
  pages: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function getProducts() {
    // console.log(`${API}${window.location.search}`);
    let res = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
    // console.log(res);
  }
  //   console.log(state.pages);
  // console.log(state.products);
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getOneProduct(id) {
    let res = await axios(`${API}/${id}`);
    // console.log(res);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: res.data,
    });
  }

  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        pages: state.pages,
        createProduct,
        getProducts,
        deleteProduct,
        getOneProduct,
        updateProduct,
      }}>
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
