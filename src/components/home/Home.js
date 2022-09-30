import React, { useState } from 'react';
import Card from './Card/Card';
import Status from './Status/Status';
import './Home.css'

const Home = () => {
    const [data, setData] = useState(0);
    
    const addToList = (time) => {
        setData(data + time)
    }
    
    return (
        <div>
            <div className='container'>
                <div>
                    <Card event={addToList}></Card>
                </div>
                <div>
                    <Status data = {data}></Status>
                </div>
            </div>
            <h1 className='head-of-question' style={{textAlign: 'center', marginTop:'100px'}}>Answer Of Questions</h1>
            <div className='question'>
            <div data-aos="fade-up-right">
                    <h2>How does react work?</h2>
                    <h4 style={{color : 'white', fontWeight : '400'}}>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h4>
                </div>
                <div data-aos="fade-up-left">
                    <h2>Difference between props and state?</h2>
                    <h4 style={{color : 'white', fontWeight : '400'}}>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h4>
                </div>
                
                <div data-aos="fade-down-right">
                    <h2>The use of useEffect hook.</h2>
                    <h4 style={{color : 'white', fontWeight : '400'}}>Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.</h4>
                </div>
            </div>
        </div>
        
        
        
    );
};
export default Home;