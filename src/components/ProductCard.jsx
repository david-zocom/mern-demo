import React from 'react';

const ProductCard = ({ product }) => {
	return (
		<div className="coffeecard">
			<img src={product.imageUrl} alt={product.name} />
			<div>{product.name}</div>
			<div>{product.size}</div>
			<div>{product.price}</div>
		</div>
	)
}

export default ProductCard;
