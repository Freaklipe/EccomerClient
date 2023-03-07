import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart';

export const store = configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },
    // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware( {
    //   // con esto sacamos el error de las fechas
    //   serializableCheck: false
    // } )
});