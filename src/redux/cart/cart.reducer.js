import {addItemToCart, removeItem} from './cart.utils';
import CartActionTypes from './cart.types';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state=INITIAL_STATE, action)=>{
switch(action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
        return{
            ...state,
            hidden: !state.hidden
        }
    case CartActionTypes.ADD_ITEM:
        return{
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
        }
    case CartActionTypes.CLEAR_ITEM:
        return{
            ...state,
            cartItems: 
            state.cartItems.filter(cartItem=>cartItem.id!== action.payload.id)
        }
    case CartActionTypes.REMOVE_ITEM:
        return{
            ...state,
            cartItems: removeItem(state.cartItems, action.payload)
        }
        default:
            return state;
}
}

export default CartReducer;