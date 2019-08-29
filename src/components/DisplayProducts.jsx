import React from 'react';
import ProductCard from './ProductCard';

const DisplayProducts = ({ data }) => {
	const products = data.map(p => (
		<ProductCard product={p} key={p.key} />
	))
	return (
		<div className="displayproducts">
			{products}
		</div>
	)
}

export default DisplayProducts;
