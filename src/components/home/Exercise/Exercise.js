import './Exercise.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Exercise = (props) => {
    
    
    const {breakes, data} = props;
    
    const notify = () => toast("Activity Completed");
    return (
        <div>
            <h4>Exercise Status</h4>
            <div>
                <div className='exercise' data-aos="zoom-out">
                    <h4>Exersice time</h4>
                    <h5 style={{
                        color : 'grey',
                    }}>{data}</h5>
                </div>
                <br />
                <div className='break-time' data-aos="zoom-out">
                    <h4>Break time</h4>
                    <h5 style={{
                        color : 'grey',
                    }}>{breakes}</h5>
                </div>
            </div>
            <br />
            <div style={{
                display : 'flex',
                justifyContent : 'center',
                borderRadius : '15px'

            }}>
                <button onClick={notify} className='complete'>Activity completed</button>
                <ToastContainer></ToastContainer>
            </div>
            
        </div>
    );
};
export default Exercise;