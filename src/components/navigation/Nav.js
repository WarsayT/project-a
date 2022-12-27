import React, { useState } from 'react';
import {HiOutlineHeart, HiOutlineShoppingBag} from 'react-icons/hi'
import {BsPerson} from 'react-icons/bs'
import {CiSearch} from 'react-icons/ci'

// import css
import './nav.css'

const Nav = () => {
  const [clicked, setClicked] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const searchItem = (event) => {
    setSearchTerm(event.target.value)
    console.log(clicked);
  }

  return (
    <section id='section-2'>
      <div className='nav'>
          <div className='logo'>
            <h1>LAST<span className='logo-num'>40.</span><span className='logo-small'>FURNITURE STORE</span></h1>
          </div>
          <div className='cta-actions'>
            <div><HiOutlineHeart /></div>
            <div><HiOutlineShoppingBag /></div>
            <div><BsPerson /></div>
          </div>
          <div className='nav-links'>
            <ul>
              <a href=''>HOME</a>
              <a href=''>MEN FASHION</a>
              <a href=''>WOMEN FASHION</a>
              <a href=''>KID'S</a>
              <a href=''>BLOG</a>
              <a href=''>CONTACT US</a>
            </ul>
          </div>
          <div className='search-bar'>
            <form action='' className='search-form'>
              <input type="text" name="search" value={searchTerm} onChange={searchItem}/>
              <button onClick={() => {
                setClicked(clicked + 1);
              }}>
                <CiSearch />
              </button>
            </form>
          </div>
      </div>
    </section> 
  )
}

export default Nav