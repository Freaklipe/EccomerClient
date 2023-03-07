import { useEffect } from 'react';
import { BrowserRouter, 
         Routes, 
         Route, 
         useLocation } from 'react-router-dom';
import { Home, 
        Navbar, 
        CartMenu, 
        Footer,
        ItemDetails,
        Checkout,
        Confirmation } from '../scenes';

// corrects the scroll to the top position with page changes
const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0,0);
    }, [pathname])
    
    return null;
};

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='item/:itemId' element={<ItemDetails />} />
                <Route path='checkout' element={<Checkout />}/>
                <Route path='confirmation/success' element={<Confirmation />}/>
            </Routes>
            <CartMenu />
            <Footer />
        </BrowserRouter>
    );
};
