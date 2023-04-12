import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

export default function Detail(props) {
  // 파라미터값을 받아오기
  const {data} = props;
  const params = useParams();
  console.log(params.id);

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Detail</h1>
        {/* params.id에 해당하는 동물정보 상세 보여주기 */}
        <img src={data[params.id].ty3Picture} />
        <h4>{data[params.id].sj}</h4>
        <p className='kind'>{data[params.id].ty3Kind}</p>
        <p className='process'>{data[params.id].ty3Process}</p>
      </div>
    </>
  )
}
