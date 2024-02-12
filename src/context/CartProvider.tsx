import { ReactNode, createContext, useEffect, useReducer } from "react";
import { ICartContext } from "../models/ICartContext";
import { cartReducer } from "../reducers/cart/reducer";
import { useNavigate } from "react-router-dom";
import { IItem } from "../models/IItem";
import { IOrderInfo } from "../models/IOrderInfo";
import { addItemAction } from "../reducers/cart/actions";

export const CartContext = createContext({} as ICartContext)

interface ICartContextProviderProps{
    children: ReactNode
}

export function CartContextProvider({ children }:ICartContextProviderProps){

    const [ cartState, dispatch ] = useReducer(
        cartReducer,
        {
            cart:[],
            orders:[]
        },(cartState) =>cartState)


        const navigate = useNavigate();

        const { cart , orders } = cartState;

        function addItem(item:IItem){
            dispatch(addItemAction(item))
        }

        function removeItem(item:IItem){
            dispatch()
        }

        function checkout(order:IOrderInfo){

        }

        function incrementItemQuantity(itemId:IItem['id']){
            dispatch()
        }

        function decrementItemQuantity(itemId:IItem['id']){
            dispatch()
        }

        useEffect(()=>{
            if(cartState){
                console.log(cartState)
            }
        },[cartState])

        return(
            <CartContext.Provider value={{
                cart,
                orders,
                addItem,
                removeItem,
                checkout,
                incrementItemQuantity,
                decrementItemQuantity
            }}>
                {children}
            </CartContext.Provider>
        )
}