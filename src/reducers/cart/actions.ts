import { NavigateFunction } from "react-router-dom";
import { ActionTypes } from "../../enums/ActionTypes";
import { IItem } from "../../models/IItem";
import { IOrderInfo } from "../../models/IOrderInfo";

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: IItem
      }
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: IItem['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: IOrderInfo
        callback: NavigateFunction
      }
    }
export function addItemAction(item:IItem){
    return{
        type:ActionTypes.ADD_ITEM,
        payload:{
            item,
        },
     } satisfies Actions
}

export function removeItemAction(itemId:IItem['id']){
    return{
        type:ActionTypes.REMOVE_ITEM,
        payload:{
            itemId,
        },
     } satisfies Actions
}

export function incrementItemQuantityAction(itemId:IItem['id']){
    return{
        type:ActionTypes.INCREMENT_ITEM_QUANTITY,
        payload:{
            itemId,
        },
     } satisfies Actions
}

export function decrementItemQuantity(actionTypes:ActionTypes){
    return{
        type:ActionTypes.DECREMENT_ITEM_QUANTITY,
        payload:{
            item,
        },
    } satisfies Actions
}

export function checkoutAction(
    order:IOrderInfo,
    callback:NavigateFunction)
    {
        return{
            type:ActionTypes.CHECKOUT_CART,
            payload:{
                order,
                callback,
            },
        } satisfies Actions
    }