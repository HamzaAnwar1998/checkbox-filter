import React,{useState,useEffect} from 'react'

export const Products = ({filter}) => {
    const [products, setProducts]=useState([
        {id: 1, productName: 'Iphone', inStock: 'true'},
        {id: 2, productName: 'Note 10', inStock: 'false'},
        {id: 3, productName: 'Samsung', inStock: 'false'},
        {id: 4, productName: 'Redmi', inStock: 'false'},
        {id: 5, productName: 'Apple', inStock: 'true'},
        {id: 6, productName: 'Banana', inStock: 'false'},
        {id: 7, productName: 'Mango', inStock: 'true'},
    ])
    useEffect(()=>{
        if(filter===true){
            const filteredProduct=products.filter(product=>product.inStock==='true');
            // console.log(filteredProduct);
            setProducts(filteredProduct);
        }
        else{
            setProducts([
                {id: 1, productName: 'Iphone', inStock: 'true'},
                {id: 2, productName: 'Note 10', inStock: 'false'},
                {id: 3, productName: 'Samsung', inStock: 'false'},
                {id: 4, productName: 'Redmi', inStock: 'false'},
                {id: 5, productName: 'Apple', inStock: 'true'},
                {id: 6, productName: 'Banana', inStock: 'false'},
                {id: 7, productName: 'Mango', inStock: 'true'},
            ])
        }
    },[filter])    
    
    return products.map(product=>(
        <div key={product.id}>
            <div>{product.productName}</div>
            <div>In Stock: {product.inStock}</div>
        </div>
    ))
}

export default Products
