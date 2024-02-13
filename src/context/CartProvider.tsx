import { ReactNode, createContext, useEffect, useReducer } from "react";
import { ICartContext } from "../models/ICartContext";
import { cartReducer } from "../reducers/cart/reducer";
import { useNavigate } from "react-router-dom";
import { IItem } from "../models/IItem";
import { 
    addItemAction,
    decrementItemQuantityAction, 
    incrementItemQuantityAction, 
    removeItemAction 
} from "../reducers/cart/actions";
import { checkoutCartAction } from "../actions/actions";
import { IOrderInfo } from "../pages/Checkout";

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
        },(cartState) =>{
            const storedStateAsJSON = localStorage.getItem(
                '@coffee-delivery:cart-state-1.0.0',
              )
        
              if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
              }
        
              return cartState
        })


        const navigate = useNavigate();

        
        const { cart , orders } = cartState;
        
        console.log('cartState',cartState)

        function addItem(item:IItem){
            dispatch(addItemAction(item))
        }

        function removeItem(itemId:IItem['id']){
            dispatch(removeItemAction(itemId))
        }

        function checkout(order:IOrderInfo){
            console.log(order)
            dispatch(checkoutCartAction(order, navigate))
        }

        function incrementItemQuantity(itemId:IItem['id']){
            dispatch(incrementItemQuantityAction(itemId))
        }

        function decrementItemQuantity(itemId:IItem['id']){
            dispatch(decrementItemQuantityAction(itemId))
        }

        useEffect(() => {
            if (cartState) {
              const stateJSON = JSON.stringify(cartState)
        
              localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
            }
          }, [cartState])

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