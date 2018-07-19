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
                <Navbar />
                <Switch> 
                    <Route path="/test"  exact  render={ ()=> <h2>React developer community</h2> }/>    
                    <Route path="/deals"  component={Deals} />
                    <Route path="/about" exact component={About} />
                    <Route path="/events"  exact component={Events} />
                    <Route path="/home" exact component={Home} />
                    <Redirect from="/" to="/home" />
                </Switch>


            <Footer/>

            </div>
        );
    }
}

export default Main;