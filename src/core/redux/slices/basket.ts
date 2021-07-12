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
        // console.log("State view", JSON.parse(JSON.stringify(state)));
        let newItem = {...action.payload};
        newItem.quantity! = 1;
        newItem.selected = true;
        return {
          ...state.cart,  cart: [...state.cart,newItem]
         }
      },

      removeFromCart: (state, action: PayloadAction<number>) => {
        const cartItem = state.cart.filter((item)=> item.id !== action.payload);
        return {
          ...state.cart, cart: cartItem
        }
      },

      increaseQuantity: (state, action: PayloadAction<cartType>) => {
        const cartItem = state.cart.map((cartItem)=>{
          let newSelectedItem = {...cartItem};
          if(newSelectedItem.id === action.payload.id){
            newSelectedItem.quantity = cartItem.quantity! + 1;
          }
          return newSelectedItem;
        })
          return {
            ...state.cart, cart:cartItem
          }   
      },

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

      emptyCart: (state) => {
        return {
          ...state.cart, cart:[]
        }
      }
    }
  });
  export const { addToCart, decreaseQuantity, removeFromCart, emptyCart, increaseQuantity } = basketSlice.actions;
  export const BasketReducer = basketSlice.reducer