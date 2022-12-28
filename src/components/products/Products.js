/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './products.css'
import {RiStarSFill} from 'react-icons/ri'

const Products = () => {
  return (
    <section id='section-6'>
      <div className='product-vertical-txt'>
        <h5>LAST40 RANDOM PRODUCTS</h5>
      </div>

      <div className='products'>
        <div className='products-nav'>
            <a href='' className='nav-item'>ALL ITEMS</a>
            <a href='' className='nav-item'>MEN FASHION</a>
            <a href='' className='nav-item'>WOMEN FASHION</a>
            <a href='' className='nav-item'>KID'S FASHION</a>
            <a href='' className='nav-item'>ACCESSORIES</a>
            <a href='' className='nav-item'>WATCHES</a>
            <a href='' className='nav-item'>OTHER</a>
        </div>

        <div className='products-display'>
          <div className='product-items'>
            <div className='product-card'>
              <h1>270x380</h1>
              <div className='product-card-footer'>
                <p><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                <h5>SUMMER SHOES</h5>
                <p>$130.25</p>
              </div>
            </div>
            <div className='product-card'>
              <h1>270x380</h1>
              <div className='product-card-footer'>
                <p><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                <h5>SUMMER SHOES</h5>
                <p>$130.25</p>
              </div>
            </div>
            <div className='product-card'>
              <h1>270x380</h1>
              <div className='product-card-footer'>
                <p><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                <h5>SUMMER SHOES</h5>
                <p>$130.25</p>
              </div>
            </div>
            <div className='product-card'>
              <h1>270x380</h1>
              <div className='product-card-footer'>
                <p><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                <h5>SUMMER SHOES</h5>
                <p>$130.25</p>
              </div>
            </div>
          </div>

          <div className='product-items'>
            <div className='product-card'>
              <h1>270x380</h1>
              <div className='product-card-footer'>
                <p><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                <h5>SUMMER SHOES</h5>
                <p>$130.25</p>
              </div>
            </div>
            <div className='product-card'>
              <h1>270x380</h1>
              <div className='product-card-footer'>
                <p><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                <h5>SUMMER SHOES</h5>
                <p>$130.25</p>
              </div>
            </div>
            <div className='product-card'>
              <h1>270x380</h1>
              <div className='product-card-footer'>
                <p><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                <h5>SUMMER SHOES</h5>
                <p>$130.25</p>
              </div>
            </div>
            <div className='product-card'>
              <h1>270x380</h1>
              <div className='product-card-footer'>
                <p><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></p>
                <h5>SUMMER SHOES</h5>
                <p>$130.25</p>
              </div>
            </div>
          </div>

        </div>

        <div className='products-list-btn'>
          <button>PRODUCT LISTING</button>
        </div>

      </div>

      <div className='products-nav-numbers'>
        <h5>01</h5>
        <h5>02</h5>
        <h5>03</h5>
      </div>

    </section>
  )
}

export default Products