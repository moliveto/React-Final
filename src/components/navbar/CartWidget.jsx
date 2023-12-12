import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({ onClick }) => {
    const { countInCart } = useContext(CartContext);

    const handleClick = () => {
        // Llama a la función onClick que proviene del padre
        if (onClick) {
            onClick();
        }
    }

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <div className="align-self-end">
            <Link className="menu-link" to="/cart" onClick={handleClick}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={countInCart()} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </Link>
        </div>
    );
}

export default CartWidget