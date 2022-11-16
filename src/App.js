import './App.css';
import { useState, useEffect } from 'react';
import About from './Components/About/About';
import Cover from './Components/Cover/Cover';
import Footer from './Components/Footer/Footer';
import Info from './Components/Info/Info';
import Navbar from './Components/Navbar/Navbar';
import Sequence from './Components/Sequence/Sequence';
import Slider from './Components/Slider/Slider';
import TodoApp from './Components/TodoList/todoApp';

function App() {

  const [scrollHeight, setScrollHeight]= useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  },[scrollHeight]);


  return (
    <div className="App">
      <Navbar isScrolling= {scrollHeight}/>
      <Cover />
      <TodoApp />
      <Sequence />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
