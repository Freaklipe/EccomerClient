import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen, setItems } from '../../store';

import { Box, Button,  Divider,IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import { shades  } from '../../theme';


const FlexBox =  styled(Box)`
    display: flex;
    justify-content: space=between;
    align-items: center;
`;


const CartNenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(( state )  => state.cart.cart );
    const isCartOpen = useSelector((state) => state.cart.isCartOpen );

    const totalPrice =  cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);

    // se debe mover segun logica de los store
    const closeCart = () => {
        dispatch(setIsCartOpen());
    };

    // No se puede cargar fuera del boton pq genera un llamado solo por carga
    // const removeCart = (id) => {
    //     dispatch(removeFromCart({ id: id }));
    // };


    return(
        <Box // overlay
            className='cartmenu-container'
            display={isCartOpen  ? 'block' : 'none' }
        >
            {/* MODAL */}
            <Box className='cartmenu-modal' >
                <Box className='cartmenu-modal-sub-box' >
                    {/* HEADER */}
                    <FlexBox mb='15px' >
                        <Typography variant='h3'>SHOPPING BAG ({cart.length})</Typography>
                        <IconButton onClick={ closeCart }>
                            <CloseIcon />
                        </IconButton>
                    </FlexBox>

                    {/* CART LIST */}
                    <Box>
                        {cart.map((item) => (
                            <Box key={`${item.attributes.name}-${item.id}`}>
                                <FlexBox p='15px 0'>
                                    <Box flex='1 1 40%'>
                                        <img 
                                            className='cartmenu-img'
                                            alt={item?.name}
                                            // width='123px'
                                            // height='164px'
                                            src={`http://localhost:1338${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                                        />
                                    </Box>
                                    <Box flex='1 1 60%'>

                                        {/* ITEM NAME */}
                                        <FlexBox mb='5px'>
                                            <Typography fontWeight='bold'>
                                                {item.attributes.name}
                                            </Typography>
                                            <IconButton onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                                            {/* <IconButton onClick={ removeCart(item.id) }> */}
                                                <CloseIcon />
                                            </IconButton>
                                        </FlexBox>
                                        <Typography>{item.attributes.shortDescription}</Typography>

                                        {/* AMOUNT */}
                                        <FlexBox m='15px 0'>
                                            <Box
                                                className='cartmenu-amount'
                                                // display='flex'
                                                // alignItems='center'
                                                border={`1.5px solid ${shades.neutral[500]}`}
                                            >
                                                <IconButton onClick={() => dispatch(decreaseCount({  id: item.id }))}>
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Typography>{item.count}</Typography>
                                                <IconButton onClick={() => dispatch(increaseCount({  id: item.id }))}>
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>
                                            
                                            {/* PRICE */}
                                            <Typography fontWeight='bold'>
                                                ${item.attributes.price}
                                            </Typography>
                                        </FlexBox>
                                    </Box>
                                </FlexBox>
                                <Divider />
                            </Box>
                        ))}
                    </Box>
                    {/* ACTIONS */}
                    <Box m='20xp 0'>
                        <FlexBox m='20px 0'>
                            <Typography fontWeight='bold'>SUBTOTAL </Typography>
                            <Typography fontWeight='bold'>$ {totalPrice}</Typography>
                        </FlexBox>
                        <Button
                            sx={{
                                backgroundColor: shades.primary[400],
                                color: 'white',
                                borderRadius: 0,
                                minWidth: '100%',
                                padding: '20px 40px',
                                m: '20px 0'
                            }}
                            onClick={() => { 
                                navigate('/checkout');
                                dispatch(setIsCartOpen({}));
                            }}
                            
                        >
                            CHECKOUT
                        </Button>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    );
};

export default CartNenu;