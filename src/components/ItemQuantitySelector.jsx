import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Button } from "@mui/material";
import Icon from '@mui/material/Icon';

const ItemQuantitySelector = ({ cantidad, handleRestar, handleSumar }) => {
    return (
        <>
            <Icon baseClassName="fas" className="fa-minus-circle" fontSize="small" onClick={handleRestar} />
            <Icon baseClassName="fas" className="fa-plus-circle" fontSize="small" onClick={handleSumar} />
            {/* <Button onClick={handleRestar} startIcon={<RemoveIcon />} variant="contained" color="primary" size="small" />
            <Button onClick={handleSumar} startIcon={<AddIcon />} variant="contained" color="primary" size="small" /> */}
            <span style={{ margin: '0 10px' }}>{cantidad}</span>
        </>
    )
}

export default ItemQuantitySelector