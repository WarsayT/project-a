import React, { useEffect, useState } from 'react'
import './deals.css'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import {HiOutlineShoppingBag, HiOutlineHeart} from 'react-icons/hi'
import {IoShuffle} from 'react-icons/io5'



const Deals = () => {

  const targetDate = new Date(2022, 12, 31).getTime()
  const [countDown, setCountDown] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown, targetDate]);

  return (
    <section id='section-4'>
      <div className='deal-timer-container'>
        <div className='deal-header'>
          <div>
            <h5>June - July 2017</h5>
            <h1>Deals of The Day<span>.</span></h1>
          </div>
          <div>
              Find all branded fashion & accessories dor men & women lorem
              ipsum dolor sit amet with cheap prices only on Last40.
          </div>

        </div>
        <div className='timer'>
          <div className='time-numbers'>
            <div className='nums'>{ new Date(countDown).getDay()}</div>
            <div className='time-labels'>DAYS</div>
          </div>

          <div className='date-separator'>:</div>

          <div className='time-numbers'>
            <div className='nums'>{ new Date(countDown).getHours() - 4}</div>
            <div className='time-labels'>HOURS</div>
          </div >

          <div className='date-separator'>:</div>

          <div className='time-numbers'>
            <div className='nums'>{ new Date(countDown).getMinutes() }</div>
            <div className='time-labels'>MINS</div>
          </div>

          <div className='date-separator'>:</div>

          <div className='time-numbers'>
            <div className='nums'>{ new Date(countDown).getSeconds() }</div>
            <div className='time-labels'>SECS</div>  
          </div>

        </div>

      </div>
      <div className='browse-deals'>
        <div className='deal-img-container'>
          <div><GrFormPrevious className='previous-btn'/></div>
          <div>300x300</div>
          <div><h5><span>100%</span> PREMIUM QUALITY </h5></div>
          <div>545x400</div>
          <div><h3>TREND</h3><h3>2017</h3></div>
          <div>300x300</div>
          <div><GrFormNext className='next-btn'/></div>
        </div>

        <div className='deals-cta'>
          <div>
            <HiOutlineHeart />
            <HiOutlineShoppingBag />
            <IoShuffle />
          </div>
          <div>
            <h4><span>Wood</span> Table<span className='txt-point'>.</span></h4>
          </div>
          <div className=''>
            <h5 className=''>$57.24 <span>$85.15</span></h5>
          </div>

        </div>
      </div>
      
    </section>
  )
}

export default Deals