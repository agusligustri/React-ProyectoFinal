/* CARGAR PRODUCTOS A BASE DE DATOS (FIREBASE) */

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { storage, db } from '../Config/Config'

export const AddProducts = ({ user }) => {

    // Hooks
    const [productType, setProductType] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productModel, setProductModel] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productStock, setProductStock] = useState(0);
    const [productDescription, setProductDescription] = useState('');
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    // Tipo de imagenes admitidas 
    const types = ['image/png', 'image/jpeg', 'image/jpg']; 

    // Handler de imagen de producto
    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Por favor, ingrese un formato válido de imagen (jpg, jpeg or png)');
        }
    }

    // Agregar Producto = Evento Form Submit
    const addProduct = (e) => {
        e.preventDefault();
        console.log(productType, productBrand, productModel, productPrice, productStock, productDescription, productImg);
        // Almacenando la imagen en storage
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
            uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductType: Number(productType),
                        ProductBrand: productBrand,
                        ProductModel: productModel,
                        ProductPrice: Number(productPrice),
                        ProductStock: Number(productStock),
                        ProductDescription: productDescription,
                        ProductImg: url
        
                    // Si el producto se aniade OK, se resetean los campos
                    }).then(() => {
                        setProductType('');
                        setProductBrand('');
                        setProductModel('');
                        setProductPrice(0);
                        setProductStock(0);
                        setProductDescription('');
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }

    return (
        <>
            <div id='addproducts' className='container'>
                <br />
                <h2>AGREGADO DE PRODUCTOS</h2>
                <hr />
                <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                    <label htmlFor="product-type">Tipo de Producto</label>
                    <select className='form-control' required
                        onChange={(e) => setProductType(e.target.value)} value={productType}>
                        <option value="" selected disabled hidden>Elija aquí</option>
                        <option value="1">Bicicletas</option>
                        <option value="2">Accesorios</option>
                        <option value="3">Indumentaria</option>
                    </select>

                    <label htmlFor="product-brand">Marca del Producto</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setProductBrand(e.target.value)} value={productBrand} />


                    <label htmlFor="product-model">Modelo del Producto</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setProductModel(e.target.value)} value={productModel} />

                    <label htmlFor="product-price">Precio del Producto</label>
                    <input type="number" className='form-control' required
                        onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />

                    <label htmlFor="product-stock">Stock del Producto</label>
                    <input type="number" className='form-control' required
                        onChange={(e) => setProductStock(e.target.value)} value={productStock} />

                    <label htmlFor="product-description">Descripción del Producto</label>
                    <textarea type="text" className='form-control text-area' required
                        onChange={(e) => setProductDescription(e.target.value)} value={productDescription} />

                    <label htmlFor="product-img">Product Image</label>
                    <input type="file" className='form-control' id="file" required
                        onChange={productImgHandler} />
                    <div className="d-flex">
                        <button type="submit" className='btn btn-success btn-md mybtn d-flex align-self-center'>AGREGAR A BASE DE DATOS</button>
                    </div>
                </form>
                {error && <span className='error-msg'>{error}</span>}
            </div>
        </>
    )
}
