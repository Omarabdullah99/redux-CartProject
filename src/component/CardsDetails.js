import React, { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const CardsDetails = () => {
    const [data,setData]=useState([])
    const {id}=useParams()
    // console.log("detailsid", id)

    const getdata=useSelector((state)=> state.cartreducer.carts)
    // console.log("detealsget data", getdata)

    const compare=()=>{
        let comparedata=getdata.filter((e)=>{
            return e.id == id
        })
        setData(comparedata)
    }

    useEffect(()=>{
        compare()
    },[id])
    console.log("detailsData", data)
    return (
        <div className='container mt-2'>
            <h1 className='text-center'>Item Details Page</h1>

            <section className='container mt-3'>
            <div className='iteamsdetails'>

            {
                data.map((ele)=>{
                    return(
                        <>

                        <div className="items_img">
            <img src={ele.imgdata} alt="" />
            </div>
            
            <div className='details'>
            <Table>
            <tr>
            <td>
            <p> <strong>Restaurant</strong>: {ele.rname} </p>
            <p> <strong>Price</strong>: {ele.price}</p>
            <p> <strong>Dishes</strong>: {ele.address}  </p>
            <p> <strong>Total</strong>: 300 </p>
            </td>

            <td>
            <p> <strong>Rating:</strong> <span style={{background:"green",color:"#fff", padding:"2px 5px", borderRadius:"5px"}}>{ele.rating}*</span> </p>
            <p> <strong>Order Review:</strong> <span >{ele.somedata}</span> </p>
            <p> <strong>Remove:</strong> <span ><i className='fas fa-trash' style={{color:'red',fontSize:20,cursor:'pointer'}}></i> </span> </p>
            </td>

            </tr>
            </Table>
            
            </div>
                        
                        </>
                    )
                })
            }

            
            
            </div>
            </section>
        </div>
    );
};

export default CardsDetails;