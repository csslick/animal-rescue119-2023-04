import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import About from './pages/About';

function App() {
  const [data, setData] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_KEY}&resultType=json`;
  // const API_KEY = 'sXxYjidiN3t6GurP%2FlL532W8cmmt4qCl%2F%2BFF72uNIWACqGGmumk6enycmK39NmiGxpmGhhxqFXvWYu4zH8f3zg%3D%3D';
  // const API_URL = `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_KEY}&resultType=json`;
  
  // console.log(import.meta.env.VITE_API_KEY)


  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const anim_data = data.getPetAnimalInfo.body.items.item;
        // console.log('data = ', data);
        // console.log(anim_data);
        setData(anim_data);
      })
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/detail/:id" element={<Detail data={data} />} />
        <Route path="/about" element={<About />} />
        {/* 맨 아래에 404 추가 */}
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

function Page404() {
  return (
    <h1>404 페이지가 존재하지 않습니다.</h1>
  )
}

export default App
