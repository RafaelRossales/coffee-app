import { IItem } from "./IItem";
import { IOrder } from "./IOrder";
import { IOrderInfo } from "./IOrderInfo";

export interface ICartContext{
    cart:IItem[],
    orders:IOrder[],
    addItem: (item:IItem) => void,
    removeItem: (item:IItem) => void,
    incrementItemQuantity: (itemId:IItem['id']) => void
    decrementItemQuantity: (itemId:IItem['id']) => void
    checkout:(order:IOrderInfo) => void
}

