import { ICoffeeCart } from "../../context/ShoppingCartContext";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  INSERT_MORE_COFFEE = "INSERT_MORE_COFFEE",
}

export function addNewCoffeeAction(coffee: ICoffeeCart) {
  return {
    type: "ADD_NEW_COFFEE",
    payload: {
      coffee,
    },
  };
}

export function removeCoffeeAction(id: number) {
  return {
    type: "REMOVE_COFFEE",
    payload: {
      id,
    },
  };
}

export function insertMoreCoffeeAction(
  id: number,
  count: number,
  numberCount: number
) {
  return {
    type: "INSERT_MORE_COFFEE",
    payload: {
      id,
      count,
      numberCount,
    },
  };
}
