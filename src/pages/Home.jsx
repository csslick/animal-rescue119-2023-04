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
            data.length > 0 ? (
              <li>
                <img src={data[0].ty3Picture} />
                <h4>{data[0].sj}</h4>
                <p>{data[0].ty3Kind}</p>
                <p>{data[0].ty3Process}</p>
              </li>
            ): null
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
