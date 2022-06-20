import './App.css'
import React from "react";
import Routing from "./Routing";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductsContextProvider from "./Contexts/productsContext";
import AuthContextProvider from './Contexts/authContext';
import CartContextProvider from './Contexts/cartContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <AuthContextProvider>
     <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
        </BrowserRouter>
       </CartContextProvider>
     </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
