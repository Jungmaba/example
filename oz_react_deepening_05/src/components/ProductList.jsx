import React from 'react';
import ProductCard from './ProductCard';

//TODO: 상품 목록을 저장하는 products 배열을 완성하세요.
//이미지 데이터는 public 폴더내에 파일을 사용하세요.

const products = [
    { id: 1, name: '무선 블루투스 이어폰', price: 59000, img: '/01.png', alt: '샘플이미지' },
    { id: 2, name: '게이밍 키보드', price: 79000, img: '/02.png', alt: '샘플이미지' },
    { id: 3, name: '스마트 워치', price: 129000, img: '/03.png', alt: '샘플이미지' },
    { id: 4, name: '핸디 청소기', price: 89000, img: '/04.png', alt: '샘플이미지' },
    { id: 5, name: 'LED 스탠드', price: 35000, img: '/05.png', alt: '샘플이미지' },
    { id: 6, name: '무선 마우스', price: 29000, img: '/06.png', alt: '샘플이미지' },
    { id: 7, name: '아이폰 충전 케이블', price: 12000, img: '/07.png', alt: '샘플이미지' },
    { id: 8, name: 'USB 허브 4포트', price: 22000, img: '/08.png', alt: '샘플이미지' },
    { id: 9, name: '커피 원두 1kg', price: 45000, img: '/09.png', alt: '샘플이미지' },
    { id: 10, name: '무드등 가습기', price: 69000, img: '/10.png', alt: '샘플이미지' },
    { id: 11, name: '라면 5개입', price: 5500, img: '/11.png', alt: '샘플이미지' },
    { id: 12, name: '고양이 사료 2kg', price: 29000, img: '/12.png', alt: '샘플이미지' },
];

//TODO: ProductList 컴포넌트를 완성하세요.
//ProductCard 컴포넌트를 사용하여 각 상품을 렌더링하세요.
//ProductCard 컴포넌트를 확인하여 props를 전달하세요.
const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    )
    {/* {products.map(product => (
            <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
            />
        ))} */}

    {/* {products.map(product => (
        <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            alt={product.alt}
            addToCart={addToCart}
        />
    ))} */}

};

export default ProductList;
