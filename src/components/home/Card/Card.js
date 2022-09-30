import React, { useEffect, useState } from 'react';
import logo from '../logo1.png';
import Cards from '../Cards/Cards';
import './Card.css'
const Card = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt="" />
                <h2>Fit & Fav Gym</h2>
            </div>
            <h3>Select Today's exercise</h3>
            <div className='cardItems' data-aos="fade-up">
                {
                    data.map(item=> <Cards event={props.event} key={item.id} data={item}></Cards>)
                }
            </div>
        </div>
    );
};
export default Card;