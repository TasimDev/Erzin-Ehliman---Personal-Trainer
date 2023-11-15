import Link from 'next/link'
import React from 'react'
import { FaWhatsapp , FaInstagram, FaFacebook} from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

const Contact = () => {
  
  return (
    <section id="contact">
      <div className="container">
        <div className="title">
          <h2>Свържете се с мен.</h2>
        </div>
        <ul>
          <li className='whatsapp-link'>
        
            <div className="icon">
            <FaWhatsapp size={24}/>
              <span>WhatsApp</span>
            </div>
            <p>
              Най-бързият начин да се свържете с мен
            </p>
            <Link href="#">Whatsap</Link>
          </li>
          <li className='email'>
            <div className="icon">
              <MdMailOutline size={24}/>
              <span>Email</span>
            </div>
            <p>
              Бъдете свободни да ми изпращате съобщения
            </p>
            <Link href="#">Mail</Link>
          </li>
          <li className='instagram'>
            <div className="icon">
              <FaInstagram size={24}/>
              <span>Instagram</span>
            </div>
            <p>
             Оставете ми съобщение
            </p>
            <Link href="#">Instagram</Link>
          </li>
          <li className='facebook'>
           
            <div className="icon">
            <FaFacebook size={24}/>
              <span>Facebook</span>
            </div>
            <p>
              Последвайте ме
            </p>
            <Link href="#">Facebook</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact