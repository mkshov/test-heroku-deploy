
import React, { useContext, useEffect } from 'react';
import { cartContext } from '../../Contexts/cartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const {getCart, cart, changeProductCount, deleteFromCart} = useContext(cartContext)
  useEffect(() => {
    getCart()
    
  },[])
  const navigate = useNavigate()
  // console.log(cart);
  return (
    <Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Sub Price</TableCell>
            <TableCell align="right">Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart && 
          cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.item.title}
              </TableCell>
              <TableCell align="right">{row.item.price}</TableCell>
              <TableCell align="right">
              <IconButton onClick={() => changeProductCount(row.count - 1, row.item.id)} aria-label="delete"><RemoveIcon /></IconButton> 
              {row.count}
              <IconButton onClick={() => changeProductCount(row.count + 1, row.item.id)} aria-label="delete"><AddIcon /></IconButton> 
              </TableCell>
              <TableCell align="right">{row.subPrice}</TableCell>
              <TableCell align="right">
              <IconButton onClick={() => deleteFromCart(row.item.id)} aria-label="delete"><DeleteIcon /></IconButton> 
              <IconButton onClick={() => navigate(`/products/${row.item.id}`)} aria-label="delete"><InfoOutlinedIcon /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{ '&:last-child td, &:last-child th': { border: 0 } }} style={{display: 'flex', justifyContent: "flex-end", margin: "30px 20px"}}>
    <Typography variant="h4" component="h2">
      Total: {cart && cart?.totalPrice}
    </Typography>
    </Box>
    </Container>
  );
}
