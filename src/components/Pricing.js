import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';


function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Nuestros Usuarios</h1>
          <div className='pricing__container'>
            <Link to='' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <img className='icon' src='images/person1.png' />

                <h4>María</h4>
                <br />
                <h2>Madrid</h2>
                <br />
                <p>Le encanta ir a la montaña</p>

                <p><b>Me encanta publicar mis viajes!</b></p>




              </div>
            </Link>
            <Link to='' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <img className='icon' src='images/person2.png' />

                <h4>Pablo</h4>
                <br />
                <h2>Asturias</h2>
                <br />
                <p>Es un aventurero</p>

                <p><b>Lo mejor de Edia es poder chatear en línea con mis amigos esté dónde esté</b></p>


              </div>
            </Link>
            <Link to='' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <img className='icon' src='images/person4.png' />

                <h4>Elena</h4>
                <br />
                <h2>Madrid</h2>
                <br />
                <p>Le apasiona visitar Europa</p>

                <p>¡Poder comentar los viajes de los demás es genial!</p>

              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
