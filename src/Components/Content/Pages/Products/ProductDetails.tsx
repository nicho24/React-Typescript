import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ProductDetailsPorps {
    id: number;
    title: string;
    price: number;
    image: string;
  }

function ProductDetails() {
    const productId = useParams();
    console.log('product id', JSON.stringify(productId));
    const [selectedProduct, setSelectedProduct] = useState<ProductDetailsPorps[]>([]);

    useEffect (() => {
      
        const fetchProductDetails = async () => {
            try {
              const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
              console.log('response', response)
              if (!response.ok) {
                throw new Error('Failed to fetch products');
              }
              const data = await response.json();
              console.log('DATA', data);
              setSelectedProduct(data);
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchProductDetails();
    }, [productId]);
    console.log('selectedProduct', selectedProduct)
    return (
        <div>
           <h2>Product Details</h2>
           { selectedProduct.map((product, index)=> (
            <div key={index} className="product-details">
              <div className="product-image">
                  <img src={product.image} alt=""/>
              </div>
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
          </div>
           ))}

        </div>
    )
}

export default ProductDetails;