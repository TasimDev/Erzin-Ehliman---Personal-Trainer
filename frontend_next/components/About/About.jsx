import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const About = () => {
    return (
        <section id="about">
            <div className="title">
                <div className="wrapper">
                    <div className="image-logo">
                        <img src="assets/nav-logo.png" alt="logo" />
                    </div>
                    <p>Аз съм Еркин Етем, сертифициран фитнес инструктор с опит в бранша. Помагам на хора като теб да увеличат мускулната си маса, да имат повече енергия и да намалят излишните килограми, за да придобият увереност, че могат да постигнат целите си. Проактивно следя твоя прогрес чрез индивидуален подход, базиран на моята 3D система и така постигам желаната трансформация.</p>
                </div>
                <div className="social">
                    <div className="buttons">
                        <Link href='#' className='btn instagram'><FaInstagram className='icon' /><span>Instagram</span></Link>
                        <Link href='#' className='btn facebook'><FaFacebookF className='icon' /><span>Facebook</span></Link>
                    </div>
                </div>
            </div>

            <video loop controls autoPlay src="assets/erkin_etem.mp4" width={"100%"} height={"100%"}>
                <source src='assets/erkin_etem.mp4' />
                Браузарът не поддържа видео
            </video>
        </section>
    )
}

export default About