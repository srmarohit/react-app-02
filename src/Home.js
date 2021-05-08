import { useEffect } from "react";
import axios from 'axios';


const Home = () => {

    useEffect(() => {
        console.log("Home Component mounted..")
        const interval = setInterval(loadUser, 2000)
        return () => {
            console.log("Home Un mounted..")
            clearInterval(interval)
        }
    }, [])

    const loadUser = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data)
    }


    return (
        <div>
            <h1>Home</h1>
           </div>
        )
}

export default Home;