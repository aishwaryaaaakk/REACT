import { useState } from "react";
import Timer from "./components/Timer";
function App(){
  const[showTimer, setShowTimer]=useState(true);

  function Togglebtn(){
    setShowTimer(!showTimer)
  }

  return(
    <>
    <h1>Timer</h1>
    <button style={{border:showTimer?"5px solid red":"5px solid green"}} onClick={Togglebtn}>
      {showTimer?"Hide Timer":"Show Timer"}
    </button>
    {showTimer && (<Timer />)}
    </>
  )
}
export default App;







