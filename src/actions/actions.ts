import { NavigateFunction } from 'react-router-dom'
import { IItem } from '../models/IItem'
import { IOrderInfo } from '../pages/Checkout'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

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

export function addItemAction(item: IItem) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export function removeItemAction(itemId: IItem['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function incrementItemQuantityAction(itemId: IItem['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function decrementItemQuantityAction(itemId: IItem['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function checkoutCartAction(
  order: IOrderInfo,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  }  satisfies Actions
}