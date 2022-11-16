import React from 'react'
import './Footer.css';
//para poder utilizar los iconos de las app se debe de bajar los iconos cdnjs.com font awesome
const Footer = () => {
    return (
        <footer className='footer'>
        <div className='footer-info'>
            <h1> Roberto Cisneros</h1>
            <p> Creado en CDMX</p>
        </div>
        <div className='footer-contact'>
            <h3>etiqueta contacto</h3>
            <p> comencemos a proyectar parrafo contacto</p>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>diseñado por roberto cisneros</div>
        <div className='sns-links'>
            <a href='https://mx.linkedin.com/' target="_blank"rel="noopener noreferrer">
            <i className='fab fa-linkedin linkedin'></i>
            </a>
            <a href='https://twitter.com/?lang=es' target="_blank "rel="noopener noreferrer">
            <i className='fab fa-twitter twitter'></i>
            </a>
            <a href='https://es-la.facebook.com/' target="_blank" rel="noopener noreferrer">
            <i className='fab fa-facebook facebook'></i>
            </a>
        </div>
        </div>

    </footer>

  )
}

export default Footer