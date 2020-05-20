import React, {useEffect} from 'react';
import './App.module.scss'
import {Header} from "./layout/header/Header.component";
import Module from "./pages/module/Module.component";
import Home from "./pages/home/Home.component";
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {Account} from "./pages/account/Account.component";
import {useDispatch} from "react-redux";
import {FetchMyself, FetchMyselfRepos} from "../redux/dispatchers/MyselfDispatcher";
import {FetchLastModules} from "../redux/dispatchers/ModulesDispatcher";
import {ActionTypeNames} from "../redux/actions";
import {Search} from "./pages/search/Search.component";
import User from "./pages/user/User.component";
import {Footer} from "./layout/footer/Footer.component";
import {Helmet} from "./Helmet.component";

export const App = () => {
    const history = createBrowserHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            dispatch(await FetchLastModules());
            const myselfDispatcher = await FetchMyself();
            dispatch(myselfDispatcher);
            if(myselfDispatcher.type === ActionTypeNames.FETCH_MYSELF_FAILED) return;
            dispatch(await FetchMyselfRepos());
        })();
    });

    return (
        <Router history={history}>
            <Helmet />
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/~(.*)\/(.*)' component={Module} />
                    <Route exact path='/~(.*)' component={User}/>
                    <Route exact path="/account" component={Account} />
                    <Route exact path="/search/:params" component={Search} />
                    <Route><Redirect to='/' /></Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
