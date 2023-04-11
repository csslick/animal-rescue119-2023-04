import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  const [data, setData] = useState([]);

  const API_KEY = 'sXxYjidiN3t6GurP%2FlL532W8cmmt4qCl%2F%2BFF72uNIWACqGGmumk6enycmK39NmiGxpmGhhxqFXvWYu4zH8f3zg%3D%3D';
  const API_URL = `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_KEY}&resultType=json`;
  
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const anim_data = data.getPetAnimalInfo.body.items.item;
        console.log(anim_data);
        setData(anim_data);
      })
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/detail/:id" element={<Detail data={data} />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App
