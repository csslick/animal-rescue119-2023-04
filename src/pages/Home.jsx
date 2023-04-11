import React from 'react';
import Navbar from '../components/Navbar';

export default function Home(props) {
  console.log(props)
  const { data } = props;

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Home</h1>
        <ul>
          {
            data.length > 0 ? 
              data.map((item, i) => {
                return (
                  <li>
                  <img src={item.ty3Picture} />
                  <h4>{item.sj}</h4>
                  <p>{item.ty3Kind}</p>
                  <p>{item.ty3Process}</p>
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
