import React from 'react'
import Style from './content.module.css'

function Content() {
    return (
       <div className={Style.content}>
           <h1>Hello World</h1>
           <p className="text-justify">Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
           </p>
           <button className="btn btn-lg btn-primary text-center border-rounded">Shop Now</button>
       </div>
    )
}

export default Content
