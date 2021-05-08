

import React from 'react'
import Content from './Content/Content'
import Form from './Form/Form'
import Style from './hero.module.css'

export default function Hero() {
    return (
        <div className={"container-fluid py-5 "+ Style.heroWrapper}>
            <div className="container d-flex align-items-center">
                <Form/>
                <Content/>
            </div>
            
        </div>
    )
}
