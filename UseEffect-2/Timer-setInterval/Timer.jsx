import { useEffect, useState } from "react"
import './app.css';

function Timer(){
    const [time, setTime] = useState(0);

    useEffect(()=>{
        const Timer=setInterval(()=>{
            setTime(prevTime => prevTime + 1)
        },1000);
        return ()=> {
            clearInterval(Timer);
        };
        

    },[]);

    return(
        <div className="timer">
            <p>Timer : {time} Seconds</p>
        </div>
    )
}
export default Timer;