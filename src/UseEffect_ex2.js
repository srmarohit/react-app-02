import { useState,useEffect } from "react";
import axios from 'axios';

const UseEffect_example2 = (props) => {

    const [name, setName] = useState('');


    useEffect(() => {
        console.log("effect called..")
         loadData();
    }, [])

    const loadData = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data)
    }

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={loadData}>LoadData</button>
           
        </div>
        )
}

export default UseEffect_example2;