import React from 'react';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

import {ReactComponent as CartIconSVG} from '../../assets/cart-icon.svg';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <CartIconSVG className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);
const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
});
const mapStateToProps = state =>({
    itemCount: selectCartItemsCount(state)

});
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);