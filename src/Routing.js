import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddProductForm from "./Components/AddProductForm/AddProductForm";
import Cart from "./Components/Cart/Cart";
import EditProductForm from "./Components/EditProductForm/EditProductForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductsList from "./Components/ProductsList/ProductsList";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import { authContext } from "./Contexts/authContext";

const Routing = () => {
  const {isAdmin} = useContext(authContext)
  console.log(isAdmin);
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/add-product" element={ isAdmin ? <AddProductForm /> : <Navigate replace to='*' />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/edit/:id" element={isAdmin ? <EditProductForm /> : <Navigate replace to="*" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    // </BrowserRouter>
  );
};

export default Routing;
