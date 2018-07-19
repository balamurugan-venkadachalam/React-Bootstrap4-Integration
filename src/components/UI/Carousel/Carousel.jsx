import React, {Component} from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import './Carousel.css'



class Carousel extends Component {
    render(){
        return(
          
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1" className=""></li>
          <li data-target="#myCarousel" data-slide-to="2" className=""></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src={require('../../../Images/dubai1.jpg')} alt="First slide" />
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Tourist Hub</h1>
                <p>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene.</p>
                <p><Link className="btn btn-lg btn-primary" to="/test" role="button">Sign up today</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="second-slide" src={require('../../../Images/dubai2.jpg')} alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>Tallest Tower.</h1>
                <p>Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline.</p>
                <p><Link className="btn btn-lg btn-primary" to="/test" role="button">Learn more</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="third-slide" src={require('../../../Images/dubai3.jpg')} alt="Third slide"/>
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>Burj Al Arab.</h1>
                <p>Iconic Burj Al Arab, a sail-shaped hotel, is near the public Jumeirah Beach, a popular stretch of sand. Of the many enormous shopping centres, Dubai Mall has an Olympic-size ice-skating rink, while Mall of the Emirates features the indoor slopes of Ski Dubai.</p>
                <p><Link className="btn btn-lg btn-primary" to="/test" role="button">Browse gallery</Link></p>
              </div>
            </div>
          </div>
        </div>

      </div>
       
        );
    }
}

export default Carousel;