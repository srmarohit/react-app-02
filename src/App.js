import { useState } from "react";

function App({ maxLength, children }) {

    const [hidden, setHidden] = useState(true);

    if (children.length < maxLength) {  
        return (
            <div>
                <h1>if block executerd</h1>
                <p>{children}</p>
            </div>
            )
    }

    return (
        <div>
            {hidden ? children.substr(0, 300).trim() : children }
            {hidden ?
                <button onClick={ (e) => setHidden(false) }>Read More</button>
                :
                <button onClick={ ()=> setHidden(true)}>Read Less</button>
                }
        </div>
        )


}
export default App;

