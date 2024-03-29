import React from 'react';
import { useHistory } from 'react-router';
import useCarts from '../../hooks/useCarts';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCarts(products);
    const history = useHistory();

    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        history.push('/PlaceOrder');
        setCart([]);
        clearTheCart();
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}>
                    </ReviewItem>)
                }
            </div>
            <div className='cart-container'>

                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;