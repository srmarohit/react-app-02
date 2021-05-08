import { useState } from "react";

const Form_Example = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');


    const printValues = (e) => {
        e.preventDefault();
        alert(`${user} and ${pass}`)
    }

    return (
        <form onSubmit={printValues}>
            <input type="text" name="user" value={user} onChange={e => setUser(e.target.value)} />
            <input type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)} />
                    <button type="submit">LogIn</button>
        </form>
        )

}

export default Form_Example;