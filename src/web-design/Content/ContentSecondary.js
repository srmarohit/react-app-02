
import React from 'react'
import CardFour from './CardFour/CardFour'
import CardOne from './CardOne/CardOne'
import CardThree from './CardThree/CardThree'
import CardTwo from './CardTwo/CardTwo'

function ContentSecondary() {
    return (
        <div className="container-fluid py-2">
            <div className="container">
                <h1 className="text-dark font-weight-bold">Η εξυπηρέτησή σας είναι όπου κι εσείς</h1>
                <p className="text-dark font-weight-bolder">Με τον υπολογιστή, το κινητό ή το tablet σας από την ασφάλεια του σπιτιού σας. </p>
            </div>
            <div className="container card-deck p-3 mx-auto" >
                <CardThree/>
                <CardFour/>
                <CardThree/>
            </div>

            <div className="container card-deck p-3 mx-auto " >
               <CardFour/>
                <CardThree/>
                <CardThree/>
            </div>
        </div>
    )
}

export default ContentSecondary
