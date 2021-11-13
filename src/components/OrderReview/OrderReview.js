import React from 'react';
import useCarts from '../../hooks/useCarts';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCarts(products);

    const handleRemove = (key) => {
        const newCart=cart.filter(product=>product.key!==key);
        removeFromDb(key);
        setCart(newCart);
    };
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
                <Cart cart={cart}></Cart>
            </div>
            <h1>{products.length}</h1>
            <h3>{cart.length}</h3>
            <h2>This is Order Review</h2>

        </div>
    );
};

export default OrderReview;