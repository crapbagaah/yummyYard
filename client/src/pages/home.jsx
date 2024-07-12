import React, { useState } from 'react';
import Layout from '../Components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAppleAlt, faCarrot, faLemon, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Salad from '../Assets/Italian-Pasta-Salad.jpg';
import Cheesecake from '../Assets/cheesecake.jpg';
import pizza from '../Assets/pizza.jpg';
import fish from '../Assets/fish-florentine.jpg';
import egg from '../Assets/egg.jpg';
import biryani from '../Assets/biryani.jpg';
import paneer from '../Assets/paneer.jpg';
import pasta from '../Assets/pasta.jpeg';
import caesar from '../Assets/caesar.jpg';
import prawn from '../Assets/prawn.jpg';
import chettinad from '../Assets/chettinad.jpg';
import mutton from '../Assets/mutton.jpg';

const Home = () => {

  return (
      <Layout>
        <div className="start_hereHeader">
          <div className="header-content-startHere">
            <h1>Welcome to Yummy Yard</h1>
            
            <pre>
                Feast your eyes on our mouth watering recipes <br />
                <br />Sometimes you just need a steamy bowl of Biryani to soothe your taste buds!
                <br />or , maybe a portion of Fish Florentine to cream away your sorrows.
                <br />  We have got it all here with much more!!
                <br />Share your recipes which tantalize the senses and display the divinity of food!
            </pre>
          </div>
        </div>

        <div className="home">

          <div className="taglines">
            <h1>Quick and Easy Meals</h1>
            <h2>@your favourite yard, the Yummy Yard</h2>
          </div>

          <div className="food-images">
            <div className="food-item">
              <img src={Cheesecake} alt="Raspberry Swirl Cheesecake" />
              <div className="food-name">Raspberry Swirl Cheesecake</div>
            </div>
            <div className="food-item">
              <img src={pizza} alt="Veggie Supreme Pizza" />
              <div className="food-name">Veggie Supreme Pizza</div>
            </div>
            <div className="food-item">
              <img src={fish} alt="Fish Florentine" />
              <div className="food-name">Fish Florentine</div>
            </div>
            <div className="food-item">
              <img src={egg} alt="Eggs Benedict" />
              <div className="food-name">Eggs Benedict</div>
            </div>
          </div>

          {/* <div className="search-bar">
            <FontAwesomeIcon icon={faAppleAlt} className="icon" />
            <FontAwesomeIcon icon={faCarrot} className="icon" />
            <input type="text" placeholder="Search for recipes..." />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <FontAwesomeIcon icon={faLemon} className="icon" />
            <FontAwesomeIcon icon={faPizzaSlice} className="icon" />
          </div> */}

          <h2 className="trending-title">Trending</h2>
          <Carousel className="recipe-cards">
            <div className="recipe-card">

              <img src={biryani} alt="Chicken Biryani" />
              <div className="recipe-info">
                <h3>Chicken Biryani</h3>
                <div className="rating">Rating: <span>★★★★☆</span></div>
              </div>
            </div>
            <div className="recipe-card">
              <img src={paneer} alt="Paneer Butter Masala" />
              <div className="recipe-info">
                <h3>Paneer Butter Masala</h3>
                <div className="rating">Rating: <span>★★★★☆</span></div>
              </div>
            </div>
            <div className="recipe-card">
              <img src={pasta} alt="Vegan Pasta Bolognese" />
              <div className="recipe-info">
                <h3>Vegan Pasta Bolognese</h3>
                <div className="rating">Rating: <span>★★★★☆</span> </div>
              </div>
            </div>
          </Carousel>

          <div className='popular-recipes-and-collections'>
            <div className="popular-recipes">
              <h2 className="popular-dishes-heading">Popular Dishes</h2>
              <div className="popular-recipe-cards-row">
                <div className="popular-recipe-card">
                  <img src={caesar} alt="Chicken Caesar Salad" />
                  <div className="recipe-info">
                    <h3>Chicken Caesar Salad</h3>
                  </div>
                </div>
                <div className="popular-recipe-card">
                  <img src={prawn} alt="Baked orzo with harissa prawns" />
                  <div className="recipe-info">
                    <h3>Baked orzo with harissa prawns</h3>
                  </div>
                </div>
                <div className="popular-recipe-card">
                  <img src={chettinad} alt="Chicken Chettinad Curry" />
                  <div className="recipe-info">
                    <h3>Chicken Chettinad Curry</h3>
                  </div>
                </div>
                <div className="popular-recipe-card">
                  <img src={mutton} alt="Kashmiri Mutton Rogan Josh" />
                  <div className="recipe-info">
                    <h3>Kashmiri Mutton Rogan Josh</h3>
                  </div>
                </div>
              </div>
              {/* <button className="see-more-button">See More</button> */}
            </div>
            
            <div className="recipe-collections">
              <h2 className="collections-heading">Recipe Collections</h2>
              <ul className="collections-list">
                <li>Chicken Recipes </li>
                <li>Mutton Recipes </li>
                <li>Vegan Recipes </li>
                <li>Seafood Recipes </li>
                <li>Pasta Recipes </li>
                <li>Dessert </li>
                {/* <li>Most Popular Recipes </li> */}
              </ul>
            </div>
          </div>
        </div>
      </Layout>

  )
}

export default Home