import { createContext, ReactNode, useReducer, useState } from "react";
import {
  addNewCoffeeAction,
  insertMoreCoffeeAction,
  removeCoffeeAction,
} from "../rudecers/cart/action";
import cartReducer from "../rudecers/cart/reducer";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export interface ICoffeeCart {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  quantity: number;
}

interface ShoppingCartContextData {
  cart: ICoffeeCart[];
  addCoffeeToCart: (coffee: ICoffeeCart) => void;
  removeCoffee: (id: number) => void;
  insertMoreCoffee: (id: number, count: number, numberCount: number) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData
);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  function addCoffeeToCart(coffee: ICoffeeCart) {
    dispatch(addNewCoffeeAction(coffee));
  }

  function removeCoffee(id: number) {
    dispatch(removeCoffeeAction(id));
  }

  function insertMoreCoffee(id: number, count: number, numberCount: number) {
    dispatch(insertMoreCoffeeAction(id, count, numberCount));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        removeCoffee,
        insertMoreCoffee,
        // updateCounOfProduct,
        // clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
