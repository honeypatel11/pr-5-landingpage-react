import { useRef, useState } from "react";


const Fragement = () => {
    const [count, setcount] = useState(0);
    let render = useRef(1);
    return (
        <>
            <h1>{count}</h1>
            <h4>render count = {render.current}</h4>
            <button onClick={() => {
                setcount(count + 1);
                render.current++;
            }}>Click me</button>
        </>
    )
}

export default Fragement