

import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/about">About</Link>
        </div>
        )
}
export default NavBar;