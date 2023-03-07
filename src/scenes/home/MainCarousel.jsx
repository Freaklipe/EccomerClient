import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { shades } from '../../theme';

import { images } from '../../helpers';


export const MainCarousel = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    return (
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <IconButton
              onClick={onClickHandler}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '0',
                color: 'white',
                padding: '5px',
                zIndex: '10',
              }}
            >
              <NavigateBeforeIcon sx={{ fontSize: 40 }} />
            </IconButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <IconButton
              onClick={onClickHandler}
              sx={{
                position: 'absolute',
                top: '50%',
                right: '0',
                color: 'white',
                padding: '5px',
                zIndex: '10',
              }}
            >
              <NavigateNextIcon sx={{ fontSize: 40 }} />
            </IconButton>
          )}
        >
          {Object.values(images).map((texture, index) => (
            <Box key={`carousel-image-${index}`}>
              <img
                className='carousel-img'
                src={texture.url}
                alt={`carousel-${index}`}
              />
              <Box
                className='carousel-box'
                left={isNonMobile ? '10%' : '0'}
                right={isNonMobile ? undefined : '0'}
                margin={isNonMobile ? undefined : '0 auto'}
                maxWidth={isNonMobile ? undefined : '240px'}
              >
                <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
                <Typography variant='h1'>Summer Sale</Typography>
                <Typography
                  fontWeight='bold'
                  color={shades.secondary[300]}
                  sx={{ textDecoration: 'underline' }}
                >
                  Discover More
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      );
};