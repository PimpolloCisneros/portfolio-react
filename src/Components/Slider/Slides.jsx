import React from 'react';
import './Slider.css';


const slidesInfo = [
    {
        src:"./Imagenes/cg6.jpg",
        alt:"Proyect 1",
        desc:"proyect 1"
    },
    {
        src:"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt:"Proyect 2",
        desc:"proyect 2"
    },
    {
        src:"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt:"Proyect 3",
        desc:"proyect 3"
    },
    {
    src:"https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt:"Proyect 4",
    desc:"proyect 4"
},
]

const Slides = slidesInfo.map((slide) => (

    <div className='slide-container'>
        <img src={slide.src}
        alt={slide.alt}/>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
  
))
export default Slides