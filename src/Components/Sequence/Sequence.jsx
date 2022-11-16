import React, { useEffect, useState } from 'react';
import './Sequence.css'

const Sequence = () => {

    const[position, setPosition]=useState(0);
    const fotos = [
        "./Imagenes/cg1.jfif",
        "./Imagenes/cg2.jfif",
        "./Imagenes/cg3.jfif",
        "./Imagenes/cg4.jpg",
        "./Imagenes/cg5.jpg",
        "./Imagenes/cg6.jpg",
        "./Imagenes/cursohtml.jpg",
    ]
    const fotosSequens = () =>{
        if(position>=6){
           return setPosition(0);
        }
        setPosition(position +1);
    }
    useEffect(()=>{
        setTimeout(fotosSequens, 2000);
    },[position])

  return (
    <div className='container-sequense'>
        <h1 className='tittle-sequense'>Carrusel de Imagenes</h1>
        {fotos.map((imagen, index)=>{
            return <div>
                {position === index &&(
                    <img className='container-img' key={index} src={imagen} alt='imagen' />
                )}
            </div>
        })}

    </div>
  )
}

export default Sequence