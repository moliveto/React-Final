import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Button } from "@mui/material";

const AddItemButton = ({ cantidad, handleAgregar }) => {
    return (
        <Button onClick={handleAgregar} startIcon={<AddShoppingCartIcon />} variant="contained" color="primary" size="small" />
    )
}

export default AddItemButton