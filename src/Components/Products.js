import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'

export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1 className='products-title'>Listado de Productos</h1>}
            {products.length !== 0 && <p className='products-subtitle'>Para ver el carrito, es necesario Iniciar Sesión</p>}
            <div className='products-container'>
                {products.length === 0 && <div>Cargando productos... Por favor espere.</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-brand'>
                            {product.ProductBrand}
                        </div>
                        <div className='product-model'>
                            {product.ProductModel}
                        </div>
                        <div className='product-price'>
                            $ {product.ProductPrice}.00
                    </div>
                        <button className='btn btn-primary addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>AGREGAR AL CARRITO</button>
                    </div>
                ))}
            </div>
        </>
    )
}
