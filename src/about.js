import { useEffect } from "react"


const About = () => {

    useEffect(() => {
        console.log("About Component mounted..")

        return () => {
            console.log("About Un mounted..")
        }
    },[])

    return (
        <h1>About Component</h1>
        )
}

export default About;