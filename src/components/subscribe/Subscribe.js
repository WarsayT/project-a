import React, { useState } from 'react'
import './subscribe.css'

const Subscribe = () => {
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const subscribe = e => {
    setSubscriberEmail(e.target.value)
  }
  return (
    <section id='section-7'>
      <form className='subscribe-container'>
        <label for='subscriber_Email'>
          <h1>SUBSCRIBE NEWSLETTER</h1>
        </label>
        <div>
          <input 
            type="email" 
            name="subscriber_Email" 
            value={subscriberEmail} 
            placeholder='youremail@domain.com'
            onChange={subscribe}
          />
          <button type="submit">SUBSCRIBE</button>
        </div>
      </form>
    </section>
  )
}

export default Subscribe