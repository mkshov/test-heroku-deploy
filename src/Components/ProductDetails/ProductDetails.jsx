// import { Box, Breadcrumbs, Container, Paper, Typography } from '@mui/material';
// // import { Container } from '@mui/system';
// import React, { useContext, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { productsContext } from '../../Contexts/productsContext';
// import Loader from '../Loader/Loader';

// const ProductDetails = () => {
//     const {getOneProduct, oneProduct} = useContext(productsContext)
//     const {id} = useParams()
//     useEffect(() => {
//         getOneProduct(id)
//     },[])
//     console.log(oneProduct);
//     return (
//         <Container>
//             <Breadcrumbs aria-label="breadcrumb">
//                <Link underline="hover" color="inherit" href="/">Shop</Link>
//                <Link
//                underline="hover"
//                color="inherit"
//                href="/products">Products</Link>
//                <Typography color="text.primary">Info</Typography>
//             </Breadcrumbs>
//             {oneProduct ?
//             <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingTop={'50px'} textAlign={'center'}>
//                 <Paper style={{width: '40%'}} elevation={3}><img src={oneProduct.image} width="100%" alt='product' /></Paper>
//                 <Paper style={{margin:'30px'}}>
//                 <Typography varinat='h4'>{oneProduct.title}</Typography>
//                 <Typography varinat='h5'>{oneProduct.price}</Typography>
//                 <Typography style={{maxWidth:'500px'}} varinat='h6'>{oneProduct.description}</Typography>
//                 </Paper>
//             </Box> : <Loader />}
//         </Container>
//     );
// };

// export default ProductDetails;
import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../Contexts/productsContext";
import Loader from "../Loader/Loader";

const ProductDetails = () => {
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link underline="hover" color="inherit" href="/products">
          Products
        </Link>
        <Typography color="text.primary">Info</Typography>
      </Breadcrumbs>
      {oneProduct ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          paddingTop={"50px"}
          textAlign={"center"}>
          <Paper style={{ width: "40%" }} elevation={3}>
            <img src={oneProduct.image} width="100%" alt="product" />
          </Paper>
          <Typography variant="h4">{oneProduct.title}</Typography>
          <Typography variant="h5">{oneProduct.price}</Typography>
          <Typography style={{ maxWidth: "400px" }} variant="string">
            {oneProduct.description}
          </Typography>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default ProductDetails;
