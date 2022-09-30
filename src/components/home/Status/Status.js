import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Status.css'

const Status = (props) => {
    const [breakes, setBreakes] = useState('');
    
    
    useEffect(() => {
        const storedCart = localStorage.getItem("break");
        if (storedCart) {
            setBreakes(JSON.parse(storedCart));
        } else {
            setBreakes("0");
        }
    }, [breakes]);

    const addToBreak = (e) => {
        localStorage.setItem("break", JSON.stringify(e.target.innerText));
        setBreakes(e.target.innerText);
    }
    return (
        <div className='headerContainer' >
            <div className='header' data-aos="flip-left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvK7l_NwNr4OGWtU-WtaNAKwpCwpa58Otfw&usqp=CAU" alt="" />
                <div>
                    <h4 style={{margin: '0px'}}>Miftahul Jannat</h4>
                    <p style={{margin: '0px'}}>Bangladesh</p>
                </div>
            </div>
            <div className='Status' data-aos="fade-right">
                <div>
                    <h4 style={{margin: '0px'}}>62KG</h4>
                    <p style={{margin: '0px'}}>Weight</p>
                </div>
                <div>
                    <h4 style={{margin: '0px'}}>5.6</h4>
                    <p style={{margin: '0px'}}>height</p>
                </div>
                <div>
                    <h4 style={{margin: '0px'}}>24</h4>
                    <p style={{margin: '0px'}}>Age</p>
                </div>
            </div>
            <h4>Add a break</h4>
            <div className='buttons' data-aos="zoom-in">
            <button onClick={addToBreak}>10s</button>
                <button onClick={addToBreak}>20s</button>
                <button onClick={addToBreak}>30s</button>
                <button onClick={addToBreak}>40s</button>
                <button onClick={addToBreak}>50s</button>
            </div>
            <br />
            <Exercise breakes = {breakes} data={props.data}></Exercise>
        </div>
    );
};
export default Status;