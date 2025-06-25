import { useRef, useState } from "react"
import Fragement from "./assets/component/Fragement";


const App = () => {
  const [name, setname] = useState('');
  let inputref = useRef(null);
  return (
    <>
      <input ref={inputref} type="text" onChange={(e) => {
        setname(e.target.value)
      }} />
      <button onClick={() => {
        inputref.current.value = ""
      }}>Click me</button>
      {/* <h1>{name}</h1> */}

      <Fragement/>
    </>
  )
}

export default App