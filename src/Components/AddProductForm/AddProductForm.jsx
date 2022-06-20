import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../Contexts/productsContext";

// title, description, price, image
const AddProductForm = () => {
  const { createProduct } = useContext(productsContext);
  // console.log(createProduct);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleValues() {
    let newProduct = {
      title,
      description,
      price,
      //   price: +price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("ЗАПОЛНИТЕ ПОЛЯ!");
      return;
    }
    createProduct(newProduct);
    navigate(`/products`);
    // console.log(newProduct);
  }
  console.log(typeof price);

  return (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link underline="hover" color="inherit" href="/products">
          Products
        </Link>
        <Typography color="text.primary">Add product</Typography>
      </Breadcrumbs>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <Typography variant="h4" component="h2">
          Add new product
        </Typography>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Title"
          variant="standard"
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Description"
          variant="standard"
        />
        <TextField
          value={price}
          onChange={e => setPrice(+e.target.value)}
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Price"
          type="number"
          variant="standard"
        />
        <TextField
          value={image}
          onChange={e => setImage(e.target.value)}
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Image"
          variant="standard"
        />
        <Button
          onClick={handleValues}
          style={{ margin: "10px" }}
          variant="contained"
          color="success">
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
