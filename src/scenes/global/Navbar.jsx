import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../store';

import { 
    Badge, 
    Box, 
    IconButton } from '@mui/material';
import { 
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined } from '@mui/icons-material';
import { shades } from '../../theme';



const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(( state ) => state.cart.cart );

    const onClick = () => {
        navigate('/');
    };

    return (
        <Box
            className='navbar-container'
            // display='flex'
            // alignItems='center'
            // width='100%'
            // height='60px'
            // backgroundColor='rgba(255, 255, 255, 0.95)'
            // color='black'
            // position='fixed'
            // top='0'
            // left='0'
            // zIndex='1'
        >
            <Box
                className='navbar-main-box'
                // width='80%'
                // margin='auto'
                // display='flex'
                // justifyContent='space-between'
                // alignItems='center'
            >
                <Box
                    onClick={ onClick }
                    sx={{ '&:hover': { cursor: 'pointer' }}}
                    color={ shades.secondary[500] }
                >
                    ECOMMER
                </Box>
                <Box
                    className='navbar-second-box'
                    // display='flex'
                    // justifyContent='space-between'
                    // columnGap='20px'
                    // zIndex='2'
                >
                    <IconButton sx={{ color: 'black' }}>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton sx={{ color: 'black' }}>
                        <PersonOutline />
                    </IconButton>

                    <Badge
                        badgeContent={ cart.length }
                        color='secondary'
                        invisible={ cart.length === 0 }
                        sx={{ '& .MuiBadge-badge': {
                            right: 5,
                            top: 5,
                            padding: '0 4px',
                            height: '14px',
                            minWidth: '13px',
                        }}}
                    >
                        <IconButton
                            onClick={() => dispatch(setIsCartOpen({}))}
                            sx={{ color: 'black' }}
                        >
                            <ShoppingBagOutlined />
                        </IconButton>
                    </Badge>

                    <IconButton sx={{ color: 'black' }}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default Navbar;