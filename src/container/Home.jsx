import React, {Component} from 'react';
import Carousel from '../components/UI/Carousel/Carousel';
import Panel from '../components/UI/Panel/Panel';
import {Link, Redirect, Route} from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <div>                
                <main role="main">
                    <Carousel />
                    <div className="container marketing">
                        <hr className="featurette-divider"/>
                        <Panel />
                        <hr className="featurette-divider"/>
                        <Panel />
                        <hr className="featurette-divider"/>
                    </div>

                </main>

            </div>
        );
    }
}

export default Home;