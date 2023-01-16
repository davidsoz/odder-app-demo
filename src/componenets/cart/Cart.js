import cartIcon from '../../assets/cart-icon.png';
import classes from './Cart.module.css';

function Cart({ onShowCart, quantity }) {

    return (
        <div className={classes.cart} onClick={onShowCart}>
            <img src={cartIcon} />
            {quantity ? <div className={classes.quantity}>{quantity}</div> : null}
        </div>
    )
}

export default Cart;