import { useEffect, useState } from "react";

function Timer(){
    const[count, setCount]= useState(0);

    useEffect(()=>{
        const newCount = setTimeout(()=>{
            setCount(prevCount => prevCount+1)
        },1000)
        return ()=>{ 
            clearTimeout(newCount)
        }; 

    },[count]);

    return(
        <div>
            <h1>Timer : {count} seconds</h1>
        </div>
    )

}
export default Timer;