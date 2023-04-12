import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Home(props) {
  console.log(props)
  const { data } = props; // 동물데이터

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Home</h1>
        <ul className="animal-list">
          {
            data.length > 0 ? 
              data.map((item, i) => {
                return (
                  <li className='item' key={i}>
                    <Link to={`/detail/${i}`}>
                      <img src={item.ty3Picture} />
                      <h4>{item.sj}</h4>
                      <p className='kind'>{item.ty3Kind}</p>
                      <p className='process'>{item.ty3Process}</p>
                    </Link>
                </li>
                )
              }) : null
          }
        </ul>
        {/* ty3Picture 사진
        ty3Kind 품종
        sj 기본정보
        ty3Process 진행상태 */}
      </div>
    </>
    
  )
}
