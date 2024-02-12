

export function AddProduct(data:any){
    return{
        type:'ADD',
        payload:{
            data
        }
    }
}

export function checkoutCartAction(
    cartProducts:any,
    callback:any
){
    return{
        type:'Check_out',
        payload:{
            cartProducts,
            callback
        }
    }
}