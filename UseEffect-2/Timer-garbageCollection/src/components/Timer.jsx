import { useEffect, useState } from "react";

function Timer(){
    const[count,setCount]=useState(0);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setCount(newCount => newCount + 1);
        },1000)
        return()=>{
            clearInterval(intervalID);
        }
    })
    return(
        <>
        <p>Timer : {count} Seconds</p>
        </>
    )
}
export default Timer;