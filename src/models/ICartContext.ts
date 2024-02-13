import { IOrderInfo } from "../pages/Checkout";
import { IItem } from "./IItem";
import { IOrder } from "./IOrder";

export interface ICartContext{
    cart:IItem[],
    orders:IOrder[],
    addItem: (item:IItem) => void,
    removeItem: (itemId:IItem['id']) => void,
    incrementItemQuantity: (itemId:IItem['id']) => void
    decrementItemQuantity: (itemId:IItem['id']) => void
    checkout:(order:IOrderInfo) => void
}

