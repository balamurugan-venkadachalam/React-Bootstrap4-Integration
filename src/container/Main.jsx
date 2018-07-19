import React, {Component} from 'react';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import Events from './Events/Events';
import Deals from './Deals/Deals';
import About from './About/About';
import Home from './Home';
import Navbar from '../components/UI/Navbar/Navbar';
import Footer from '../components/UI/Footer/Footer';



class Main extends Component {
    render(){
        return(
            <div>
            <Navbar/> 

                <Route to="/events" exact component={Events} />
                <Route to="/deals" exact component={Deals} />
                <Route to="/about" exact component={About} />
                <Route to="/" exact component={Home} />

            <Footer />

            </div>
        );
    }
}

export default Main;