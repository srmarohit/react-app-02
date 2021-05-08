import { Component } from "react";

class ClassEffect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }

    componentDidMount() {
        console.log("Component Mounted..")
        this.interval = setInterval(this.tick, 2000);   // locl

    }

    componentWillUnmount() {
        console.log("Component Unmounted..")
        clearInterval(this.interval);
    }

    tick = () => {
        console.log("Tick called..");
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        return (
            <h1>{ this.state.count }</h1>
            )
    }
}

export default ClassEffect;