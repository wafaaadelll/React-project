import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import {addToCart} from './redux/action/index';
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'
export default function MyItems() {
  let [albums,setAlbums]=useState([])
  let [filter,setFilter]= useState(albums)

  const dispatch = useDispatch();
    const additem = (item)=>{
        dispatch(addToCart(item))
    }

  let comp = true;
  useEffect(()=>{
    axios
    .get(`https://api.escuelajs.co/api/v1/products`)
    .then((Response)=>{
        setAlbums(Response.data);
        setFilter(Response.data)
    })
    .catch((e)=>{
        console.log(e)
    })
},[])
  const filter1 = (prod) =>{
    const load = albums.filter((x)=>x.category.name === prod)
    setFilter(load)
}
  return (
    <div className=' py-5 text-center mx-auto '>
        <div className='container pt-5'>
            <div className='row text-center pt-4'>
                <h2 className='my-4'>CATEGORIES FOR PRODUCTS</h2>
                <div className='col-12'>
                <button className='b btn border border-warning p-2 me-3 mb-1 col-3 col-lg-1' onClick={()=>setFilter(albums)}><img src='https://www.pngall.com/wp-content/uploads/2016/04/Shopping-PNG-Clipart.png' width={'100px'}/></button>
                <button className='b btn border border-warning p-2 me-3 mb-1 col-3 col-lg-1' onClick={()=>filter1('Clothes')}><img src='https://www.transparentpng.com/thumb/clothes/X2VUD4-clothes-free-download-transparent.png' width={'70px'}/></button>
                <button className='b btn border border-warning p-2 me-3 mb-1 col-3 col-lg-1' onClick={()=>filter1('Electronics')}><img src='https://www.pngall.com/wp-content/uploads/4/Wireless-Headphone-Background-PNG-Image.png' width={'60px'}/></button>
                <button className='b btn border border-warning p-2 me-3 mb-1 col-3 col-lg-1' onClick={()=>filter1('Furniture')}><img src='https://pngimage.net/wp-content/uploads/2018/05/chair-images-png-2.png' width={'50px'}/></button>
                <button className='b btn border border-warning p-2 me-3 mb-1 col-3 col-lg-1' onClick={()=>filter1('Shoes')}><img src='https://www.freeiconspng.com/thumbs/shoes-png/women-shoes-png-downloads-image-32.png' width={'70px'}/></button>
                <button className='b btn border border-warning p-2 me-3 mb-1 col-3 col-lg-1' onClick={()=>filter1('Others')}><img src='https://www.pngplay.com/wp-content/uploads/7/Grocery-Bucket-Background-PNG-Image.png' width={'90px'}/></button>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
        {
          filter.map((element) => {
            return (
              <>
                <Card style={{ width: '19rem',border:"none" }} className="mx-2 mt-4 card_style border">
                <NavLink to={`/MyItems/${element.id}`}><Card.Img variant="top" src={element.images} style={{height:"16rem"}} key={element.id} className="mt-3 zoom" /></NavLink>
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>
                            Price : {element.price} LE
                            </Card.Text>
                            <div className="button_div d-flex justify-content-center">
                            <button className='btn btn-warning text-white' onClick={()=>additem(element)}>ADD TO CART</button>
                            <NavLink to='/cart' className='btn btn-dark ms-1'>GO TO CART</NavLink>
                            </div>
                        </Card.Body>
                        </Card>
                    </>
                    )
                })
                }
            </div>
            </div>
        </div>
    </div>
  )
}
