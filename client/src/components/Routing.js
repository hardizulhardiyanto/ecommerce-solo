import React from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';
import DetailProduct from './DetailProduct';


const Routing = () => {
    return (
        <div>
            <Router>
                <nav class="navbar navbar-inverse navbar-fixed-top normal" role="navigation" >

                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href={'#'}>

                            </a>
                        </div>
                        <div id="navbar" class="collapse navbar-collapse">

                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                <NavLink exact activeClassName="active" to="/">
                                    Home
                                </NavLink>
                                </li>
                                <li>
                                <NavLink activeClassName="active" to="/users">
                                    About
                                </NavLink>
                                </li>
                                <li>
                                <NavLink activeClassName="active" to="/contact">
                                    Contact
                                </NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>

                <br />
                <br />
                <div>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/users" component={Users} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/DetailProduct" component={DetailProduct} />
                        <Route component={Notfound} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Routing
