import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home/index'
import Header from './shared/components/header/header'
import CategoriesList from './shared/components/categoriesList/index'



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;