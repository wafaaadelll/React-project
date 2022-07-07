import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {addToCart} from './redux/action/index'
import { useParams } from 'react-router-dom'
import './cards.css'

export default function ShowAlbums() {
    let {id} = useParams();
    let [albums,setAlbums]=useState({})
    
    const dispatch = useDispatch();
    const additem = (item)=>{
        dispatch(addToCart(item))
    }

    useEffect(()=>{
        axios
        .get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((Response)=>{
            setAlbums(Response.data);
        })
        .catch((e)=>{
            console.log(e)
        })
    },[])
    
  return (
    <section>
        <div className="jh"></div>
        <div className='.APP container cards w-75 py-5 text-center'>
        <div className='row justify-content-evenly py-4'>
            <div className='col-12 col-lg-4'>
                <img src={albums.images} alt="product" className='bor'/>
            </div>
            <div className='col-12 col-lg-6'>
                <div className='pt-4'>
                    <p className='fs-5'> <strong className='fs-5'>NAME</strong>  : {albums.title}</p>
                    {/* <p> <strong>Category</strong>  : {albums.category.name}</p> */}
                    <p className='fs-5'> <strong className='fs-5'>PRICE</strong>  : {albums.price} $</p>
                    <p className='fs-5'> <strong className='fs-5'>DETAILS</strong>  : {albums.description}</p>
                    <button className='btn btn-warning py-2 text-white k' onClick={()=>additem(albums)}>ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
