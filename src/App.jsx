import { useState } from 'react'
import './App.css'

function App() {
  const [photos,setPhotos] = useState([
    {id:0,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrl5_7yt-Vo5IvRJ-cAFvo5ntPfRIGaYo7mN2OhwBK-06otNtzQ2x2aIXAjEFT1aTREZo&usqp=CAU"},
    {id:1,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhstKkzvmZpHNDUUpQigwPLLtvsY0eoFLag&s"},
    {id:2,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTCLgnfMlf9ML84mKoG-Cg4HWkh-GuQCa1A&s"},
    {id:3,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Nmh54qJsJQ1VabUohmNHyGvZdK58zalFxg&s"},
    {id:4,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s"},
    {id:5,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oAa216dhvSkp1YJ0djbJl6AL8oWF5vB9aA&s"},
    {id:6,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBfhC-QlgM4DmR6VXrznFyXdNwytV9-SOMw&s"},
    {id:7,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEg7e95w0mQFIleibc4zyRrWNobQ4aFIuaQ&s"},
    {id:8,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8MolffnXO47Ua7gFiRMwpl93cT5EdgVMTA&s"},
  ]);
  const [index,setIndex] = useState(0);
  const handlePrev = () => {
    if(index-1 >= 0){
      setIndex(index-1);
    }else{
      setIndex(photos.length - 1);
    }
  }
  const handleNext = () => {
    if(index+1 < photos.length){
      setIndex(index+1);
    }else{
      setIndex(0);
    }
  }
  const changeImage = (id) => {
    const findIndex = photos.findIndex(elm => elm.id == id);
    setIndex(findIndex);
  }
  return (
    <>
      <div className="container">
          <div className="main">
              <img src={photos[index].url} className='photo'/>
          </div>
          <div id='buttons-wrapper'>
            <button id='prev' onClick={() => handlePrev()}>Prev</button>
            <button id='next' onClick={() => handleNext()}>Next</button>
          </div>
          <div className="timeline">
              {
                photos.map((elm,i) => {
                  let activeClass = index == i ? "active" : "timelineImg";
                  return <img src={elm.url} key={elm.id} className={activeClass} onClick={() => changeImage(elm.id)}/>
                })
              }
          </div>
      </div>
    </>
  )
}

export default App
