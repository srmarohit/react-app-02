

import React from 'react'
import style from './FooterTwo.module.css'

export default function FooterTwo() {
    return (
        <div className={"text-left "+style.footer}>
            <h6 className="text-white small font-weight-bolder mb-3">ΚΑΝΤΕ ΤΙΣ ΣΥΝΑΛΛΑΓΕΣ ΣΑΣ</h6>
            <ul className="py-2 px-0 text-light">
                <li>Από τον υπολογιστή σας</li>
                <li>Από το κινητό σας</li>
                <li>Τηλεφωνικά</li>
                <li>Στα ΑΤΜ</li>
                <li>Από το κινητό σας</li>
                <li>Στα Κέντρα Αυτόματων Συναλλαγών</li>
            </ul>
        </div>
    )
}
