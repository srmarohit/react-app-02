
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './about';
import NavBar from './NavBAr';

const Router_Example = () => {

    return (
        <div>
            <BrowserRouter>   
                <NavBar />
                   <Switch>     
                    <Route exact path="/" component={Home} />      
                    <Route path="/about" component={About} />
                    </Switch>
            </BrowserRouter>

            </div>
        )
}


export default Router_Example;

