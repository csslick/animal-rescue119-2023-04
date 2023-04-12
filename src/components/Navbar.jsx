import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
      </ul>
    </nav>
  )
}
