import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../Contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import { Box, Container } from "@mui/system";
import { Button, Pagination } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import Filters from "../Filters/Filters";
import { authContext } from "../../Contexts/authContext";

const ProductsList = () => {
  const { getProducts, products, pages } = useContext(productsContext);
  const {currentUser} = useContext(authContext)
  const {isAdmin} = useContext(authContext)
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [price, setPrice] = useState([1, 1000000]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, [search, price, page]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  //   console.log(price);
  //   console.log(window.location.search);
  return (
    <Container>
      {isAdmin ? (
              <Button
        variant="outlined"
        style={{ margin: "30px" }}
        onClick={() => { if(currentUser){
          navigate(`/add-product`)
        } 
        }}>Add product
      </Button>)     
      : null}

      <Filters
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
      />
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          page={page}
          count={isNaN(pages) ? 0 : pages}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
