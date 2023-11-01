import { useState} from 'react'
import './app.css'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    const newCount= count + 1;
    setCount(newCount)
    document.title = ` Clicked ${count+1} times`
  }

  return (
    <>
    {/* <div> */}
      <h1>COUNTER</h1>
      <p>{count}</p>
      <button onClick={handleClick}>COUNT</button>
    {/* </div> */}
    </>
  )
}

export default App
