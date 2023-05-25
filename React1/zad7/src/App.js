import React from 'react';
import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App(){
  const [fontSize, setFontSize] = useState("18px");
  const [fontColor, setFontColor] = useState("green");
  const [likes, setLikes] = useState(0);

  const ustawRozowe = (e) => {
    setFontSize("20px");
    setFontColor("pink");
  }

  const ustawRozmiar = (e) => {
    setFontSize(e.target.value);
  }

  const ustawKolor = (e) => {
    setFontColor(e.target.value);
  }

  const rozmiar30 = () => {
    setFontSize("30px");
  }

  const handleLikeButton = () => {
    setLikes(likes + 1);
  }

  return(
   <div className="grid-parent">
      <Header fontSize={fontSize} fontColor={fontColor} likes={likes}/>
      <Sidebar fontSize={fontSize} fontColor={fontColor} handleFontSizeChange={ustawRozmiar} handleFontColorChange={ustawKolor} ustawRozowe={ustawRozowe}/>
      <MainArea fontSize={fontSize} color={fontColor}/>
      <Footer handleFontChange={rozmiar30} onLikeClick={handleLikeButton}/>
    </div>
  )
}

export default App;
