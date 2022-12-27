import React from 'react'

// css for home page
import './home.css'

const Home = () => {
  return (
    <section id='section-1' className='home'>
        <div className='vertical-txt'>
            <h5>MODERN FURNITURE 2017</h5>
        </div>
        <div className='img-container'>
            <h1>1920x960</h1>
        </div>
        <div className='home-content'>
            <h5>Indoor furniture</h5>
            <h1>MODERN CHAIR FURNITURE<span>.</span></h1>
            <p>
                Find all branded fashion and accessories for men and women lorem 
                ipsum dolor sit amet with cheap price only on Last40.
            </p>
            <button>SHOP NOW</button>
        </div>
        <div className='nav-numbers'>
            <h5>01</h5>
            <h5>02</h5>
            <h5>03</h5>
        </div>

    </section>
  )
}

export default Home