import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import gadgetReducer from "./Feature/gadgetSlice";
import reviewReducer from "./Feature/reviewSlice";
import wishlistReducer from "./wishlistSlice"; 
const store = configureStore({
  reducer: {
    auth: authReducer,
    gadgets: gadgetReducer,
    reviews: reviewReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
