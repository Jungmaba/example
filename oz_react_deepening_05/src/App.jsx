import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        // TODO: 카트에 상품을 추가하는 함수를 완성하세요.
        // 상품은 배열객체로 이루어져 있습니다.
        // 카트에 상품이 8개 이상이면 alert를 띄워
        // 더 이상 상품을 추가할 수 없다고 알려주세요.
    };

    return (
        <>
            <div className="container">
                <ProductList addToCart={addToCart} />
            </div>
            <Cart cart={cart} setCart={setCart} />
        </>
    );
};

export default App;
