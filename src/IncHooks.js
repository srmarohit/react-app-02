import { useState } from "react"


const useIncHooks = (initValue) => {

    const [value, setValue] = useState(initValue);

    const incHandler = () => {
        setValue(value + 1)
    }

    return [value, incHandler];
}

export default useIncHooks;