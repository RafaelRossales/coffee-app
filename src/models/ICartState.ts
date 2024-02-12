import { IItem } from "./IItem";
import { IOrder } from "./IOrder";

export interface ICartState{
    cart:IItem[],
    orders:IOrder[]
}