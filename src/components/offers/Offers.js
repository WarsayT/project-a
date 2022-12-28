import React from 'react'
import './offers.css'
import {SlLocationPin, SlDiamond} from 'react-icons/sl'
import {IoShieldCheckmarkOutline} from 'react-icons/io5'

const Offers = () => {
  return (
    <section id='section-5'>
      <div className='offer-header'>
        <h5>What we offers</h5>
        <h1>Last40 Services<span>.</span></h1>
      </div>

      <div className='offer-details'>
        <div className='offer-item'>
          <div className='logo-offer'>
            <SlLocationPin className='logo'/>
          </div>
          <div className='offer-content'>
            <h5>FREE SHIPPING WORLDWIDE</h5>
            <p>
              Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry. Lorem 
              Ipsum has been the industry's standard.
            </p>
            <button>LEARN MORE</button>
          </div>

        </div>

        <div className='offer-item'>
          <div className='logo-offer'>
            <IoShieldCheckmarkOutline className='logo'/>
          </div>
          <div className='offer-content'>
            <h5>30 DAYS RETURN GUARANTEE</h5>
            <p>
              Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry. Lorem 
              Ipsum has been the industry's standard.
            </p>
            <button>LEARN MORE</button>
          </div>

        </div>

        <div className='offer-item'>
          <div className='logo-offer'>
            <SlDiamond className='logo'/>
          </div>
          <div className='offer-content'>
            <h5>100% PREMIUM QUALITY</h5>
            <p>
              Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry. Lorem 
              Ipsum has been the industry's standard.
            </p>
            <button>LEARN MORE</button>
          </div>

        </div>
        

      </div>
    </section>
  )
}

export default Offers