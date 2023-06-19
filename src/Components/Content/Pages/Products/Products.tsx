import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

interface ProductLists {
    id: number;
    title: string;
    price: number;
    image: string;
  }
function Products() {

    // const products = [
    //     { name: "Shirt", price: 500 },
    //     { name: "Pant", price: 700 },
    //     { name: "Sudi", price: 1000 },
    //     { name: "Shoes", price: 600 }
    // ]
    const [products, setProducts] = useState<ProductLists[]>([]);

    useEffect (() => {
        const fetchProducts = async () => {
            try {
              const response = await fetch('https://fakestoreapi.com/products');
              if (!response.ok) {
                throw new Error('Failed to fetch products');
              }
              const data = await response.json();
              console.log('DATA', data)
              setProducts(data);
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchProducts();
    }, []);

    return (
        <>
        <h2>Products</h2>
        <div className="product-list">
            { products.map((product)=> (
              <Link 
                to={`/products/${product.id}`} 
                key={product.id}
                // onClick={() => handleClick(product)} 
                >
                <Card key={product.id} name={product.title} price={product.price} image={product.image} />
              </Link>
            ))}
        {/* <p>Products coming soon</p> */}
        </div>
        </>
    )
}

export default Products;