import { useEffect, useState } from "react"

const App = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    let num = JSON.parse(sessionStorage.getItem("count")) || 0
    setcount(num);
  }, [])

  useEffect(() => {
    sessionStorage.setItem("count", count)

  }, [count])
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={() => {
        setcount(count + 1);
      }}>click Me</button>
    </div>
  )
}

export default App