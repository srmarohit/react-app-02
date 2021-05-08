import { useState, useEffect } from "react";


const UseEffect_example = () => {

    const [count, setCount] = useState(0);


    const tick = () => {
        console.log("tick method called")
        setCount(count + 1)
    }

    useEffect(() => {
        console.log("Effect Called.. and component mounted");
        const interval = setInterval(tick, 2000);

        return () => {
            clearInterval(interval);
            console.log("Component Un mounted..")
        }

    },[])

    return (
        <h1>{ count }</h1>
        )
}

export default UseEffect_example;







