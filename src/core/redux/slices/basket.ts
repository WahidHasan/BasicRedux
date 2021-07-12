import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type cartType = {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  selected?: boolean;
};

type InitialState = {
  cart: cartType[];
}

//const cartInitialState : cartType[] = [];

function GetInitialState(): InitialState {
  let cart: cartType[] = [];

  return{
    cart
  }
}

const basketSlice = createSlice({
    name: "basket",
    initialState: GetInitialState(),
    reducers: {
      addToCart: (state, action: PayloadAction<cartType>) => {

        console.log("State view", JSON.parse(JSON.stringify(state)));
        let itemExist = false;
        //increment quantity
        const cartItem = state.cart.map((cartItem)=>{
          let newSelectedItem = {...cartItem};
          if(newSelectedItem.id === action.payload.id){
            itemExist = true;
            newSelectedItem.quantity = cartItem.quantity! + 1;
          }
          return newSelectedItem;
        })
        if(itemExist){
          return {
            ...state.cart, cart:cartItem
          }
        }
        //end of increment quantity
        
        // add new item
        const index = state.cart.findIndex((item)=> item.id !== action.payload.id);
        console.log("Index***, ", index);
        if(index <= 0){
             let newItem = action.payload;
        newItem.quantity = 1;
        newItem.selected = true;
        return {
          ...state,  cart: [...state.cart,newItem]
         }
        }
      },

      removeFromCart: (state, action: PayloadAction<number>) => {
        const cartItem = state.cart.filter((item)=> item.id !== action.payload);
        return {
          ...state.cart, cart: cartItem
        }
      },
      // increaseQuantity: (state) => {
      //   state.count = state.count - 1;
      // },
      decreaseQuantity: (state, action: PayloadAction<number>) => {
        const cartItem = state.cart.map((cartItem)=>{
          let newSelectedItem = {...cartItem};
          if(newSelectedItem.id === action.payload){
            newSelectedItem.quantity = cartItem.quantity! - 1;
          }
          return newSelectedItem;
        })
        return {
          ...state.cart, cart:cartItem
        }
      },
      // emptyCart: (state) => {
      //   state.count = state.count - 1;
      // },
    }
  });
  export const { addToCart, decreaseQuantity, removeFromCart } = basketSlice.actions;
  export const BasketReducer = basketSlice.reducer