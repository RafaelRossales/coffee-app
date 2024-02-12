import { NavigateFunction } from "react-router-dom"
import { ActionTypes } from "../enums/ActionTypes"
import { IItem } from "./IItem"
import { IOrderInfo } from "./IOrderInfo"

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