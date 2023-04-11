import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

export default function Detail(props) {
  // 파라미터값을 받아오기
  const params = useParams();
  console.log(params);

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Detail</h1>
        {/* params.id에 해당하는 동물정보 상세 보여주기 */}
      </div>
    </>
  )
}
