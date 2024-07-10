import React, { useState } from 'react';
import Layout from '../Components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAppleAlt, faCarrot, faLemon, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Salad from '../Assets/Italian-Pasta-Salad.jpg';


const Home = () => {

  return (
      <Layout>
        <div className="start_hereHeader">
          <div className="header-content">
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
              <img src={Salad} alt="Food 1" />
              <div className="food-name">Food Name 1</div>
            </div>
            <div className="food-item">
              <img src={Salad} alt="Food 2" />
              <div className="food-name">Food Name 2</div>
            </div>
            <div className="food-item">
              <img src={Salad} alt="Food 3" />
              <div className="food-name">Food Name 3</div>
            </div>
            <div className="food-item">
              <img src={Salad} alt="Food 4" />
              <div className="food-name">Food Name 4</div>
            </div>
          </div>

          <div className="search-bar">
            <FontAwesomeIcon icon={faAppleAlt} className="icon" />
            <FontAwesomeIcon icon={faCarrot} className="icon" />
            <input type="text" placeholder="Search for recipes..." />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <FontAwesomeIcon icon={faLemon} className="icon" />
            <FontAwesomeIcon icon={faPizzaSlice} className="icon" />
          </div>

          <h2 className="trending-title">Trending</h2>
          <Carousel className="recipe-cards">
            <div className="recipe-card">
              <img src={Salad} alt="Recipe 1" />
              <div className="recipe-info">
                <h3>Recipe 1</h3>
                <div className="rating">Rating: <span>★★★★☆</span></div>
              </div>
            </div>
            <div className="recipe-card">
              <img src={Salad} alt="Recipe 2" />
              <div className="recipe-info">
                <h3>Recipe 2</h3>
                <div className="rating">Rating: <span>★★★★☆</span></div>
              </div>
            </div>
            <div className="recipe-card">
              <img src={Salad} alt="Recipe 3" />
              <div className="recipe-info">
                <h3>Recipe 3</h3>
                <div className="rating">Rating: <span>★★★★☆</span> </div>
              </div>
            </div>
          </Carousel>

          <div className='popular-recipes-and-collections'>
            <div className="popular-recipes">
              <h2 className="popular-dishes-heading">Popular Dishes</h2>
              <div className="popular-recipe-cards-row">
                <div className="popular-recipe-card">
                  <img src={Salad} alt="Popular Recipe 1" />
                  <div className="recipe-info">
                    <h3>Popular Recipe 1</h3>
                  </div>
                </div>
                <div className="popular-recipe-card">
                  <img src={Salad} alt="Popular Recipe 2" />
                  <div className="recipe-info">
                    <h3>Popular Recipe 2</h3>
                  </div>
                </div>
                <div className="popular-recipe-card">
                  <img src={Salad} alt="Popular Recipe 3" />
                  <div className="recipe-info">
                    <h3>Popular Recipe 3</h3>
                  </div>
                </div>
                <div className="popular-recipe-card">
                  <img src={Salad} alt="Popular Recipe 4" />
                  <div className="recipe-info">
                    <h3>Popular Recipe 4</h3>
                  </div>
                </div>
              </div>
              <button className="see-more-button">See More</button>
            </div>
            
            <div className="recipe-collections">
              <h2 className="collections-heading">Recipe Collections</h2>
              <ul className="collections-list">
                <li>Instant Pot Recipes </li>
                <li>Vegan Recipes </li>
                <li>Meal Prep Recipes </li>
                <li>Quick and Easy Recipes </li>
                <li>Pasta Recipes </li>
                <li>Soup Recipes </li>
                <li>Most Popular Recipes </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>

  )
}

export default Home