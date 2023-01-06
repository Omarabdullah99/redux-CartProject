import React from 'react';
import { useState } from 'react';
import CardsData from './CardsData'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css'
import { useDispatch } from 'react-redux';
import {ADD} from '../redux/actions/action'


const Cards = () => {
    const [data,setData]=useState(CardsData)
    // console.log(data)
    const dispatch=useDispatch()
    const send=(e)=>{
      console.log(e)
      dispatch(ADD(e))

    }
    return (
        <div className='container mt-3'>
            <h1 className='text-center'>this is cart</h1>
            <div className='row'>
            {
               data.map((element,id)=>{
                return(
                    <>
                    <Card className='mx-2 mt-4 card_style' style={{ width: '18rem',border:"none" }}>
                    <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3"/>
                    <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>
                        price:{element.price}
                      </Card.Text>
                      <div className='button_div d-flex justify-content-center'>
                      <Button onClick={()=> send(element)} variant="primary" className='col-lg-12'>Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                    </>
                )
               })
            }
            
            </div>
        </div>
    );
};

export default Cards;