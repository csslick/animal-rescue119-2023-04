import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/detail">상세정보</Link></li>
      </ul>
    </nav>
  )
}
