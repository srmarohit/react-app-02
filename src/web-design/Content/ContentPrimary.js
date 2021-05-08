
import React from 'react'
import CardOne from './CardOne/CardOne'
import CardThree from './CardThree/CardThree'
import CardTwo from './CardTwo/CardTwo'

function ContentPrimary() {
    return (
        <div className="container-fluid bg-light mt-n5 py-2">
            <div className="container">
                <h1 className="text-dark font-weight-bold">Η εξυπηρέτησή σας είναι όπου κι εσείς</h1>
                <p className="text-dark font-weight-bolder">Με τον υπολογιστή, το κινητό ή το tablet σας από την ασφάλεια του σπιτιού σας. </p>
            </div>
            <div className="container card-deck p-3 mx-auto" >
                <CardTwo/>
                <CardOne/>
                <CardOne/>
            </div>

            <div className="container card-deck p-3 mx-auto " >
               <CardTwo/>
                <CardTwo/>
                <CardOne/>
            </div>
        </div>
    )
}

export default ContentPrimary
