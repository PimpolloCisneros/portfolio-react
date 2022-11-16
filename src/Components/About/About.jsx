import React from 'react'
import aboutFoto from '../Media/luffy.jpg';
import './About.css'

 const About = () => {
  return (
    <div className='about-container'>
    <div className='about-desc'>
        <h3>Acerca de nosotros</h3>
        <p>"Princesa, te he amado toda la vida. Como soy un hombre pobre y no tengo tesoros para darte, te ofrezco mi sacrificio como prueba de amor. Estaré cien días sentado bajo tu ventana, sin más alimentos que la lluvia y sin más ropas que las que llevo puestas. Esta será mi dote"        
        </p>
    </div>
    <div className='about-img'>
        <img src={aboutFoto}alt='about' />
    </div>
    </div>
  )
}

export default About