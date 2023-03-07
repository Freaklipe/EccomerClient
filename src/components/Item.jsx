import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { IconButton, Box, Typography, useTheme, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { shades } from '../theme';
import { addToCart } from '../store';


// Esto crea los objetos  en pantalla  que vienen desde el  backend
const Item = ({  item,  width }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const {
        palette: { neutral },
    } = useTheme();

    const { category='', price, name, image } = item.attributes;
    const {
        data: {
        attributes: {
            formats: {
            medium: { url },
            },
        },
        },
    } = image;
    
    const increaseCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(Math.max(count - 1, 1));
    };

    const itemDetail = () => {
        navigate(`/item/${item.id}`);
    };

    const categoryFormatting = category && category
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

    return (
        <Box width={width}>
          <Box
            position='relative'
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          >
            <img
                className='item-img'
                alt={item.name}
                src={`http://localhost:1338${url}`}
                onClick={ itemDetail }
            />
            <Box
                className='item-box-a'
                display={isHovered ? 'block' : 'none'}
            >
              <Box className='item-box-aa' >
                {/* AMOUNT */}
                <Box
                    className='item-box-aaa'
                    backgroundColor={shades.neutral[100]}
                >
                  <IconButton onClick={ decrementCount }>
                    <RemoveIcon />
                  </IconButton>
                  <Typography color={shades.primary[300]}>{count}</Typography>
                  <IconButton onClick={ increaseCount }>
                    <AddIcon />
                  </IconButton>
                </Box>

                {/* BUTTON */}
                <Button
                  onClick={() => {
                    dispatch(addToCart({ item: { ...item, count } }));
                  }}
                  sx={{ backgroundColor: shades.primary[300], color: 'white' }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Box>


          <Box mt='3px'>
            <Typography variant='subtitle2' color={neutral.dark} fontWeight='bold'>
                { categoryFormatting }
            </Typography>
            <Typography>{name}</Typography>
            <Typography fontWeight='bold'>${price}</Typography>
          </Box>
        </Box>
    );
};

export default Item;