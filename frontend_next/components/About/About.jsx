
import React from 'react'
const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="title">
                    <div className="wrapper">
                        <div className="image-logo">
                            <img src="assets/nav-logo.png" alt="logo" width={"350px"} height={"350px"} />
                        </div>
                        <p>Аз съм Еркин Етем, сертифициран фитнес инструктор с опит в бранша. Помагам на хора като теб да увеличат мускулната си маса, да имат повече енергия и да намалят излишните килограми, за да придобият увереност, че могат да постигнат целите си. Проактивно следя твоя прогрес чрез индивидуален подход, базиран на моята 3D система и така постигам желаната трансформация.</p>
                    </div>

                </div>
                <video loop controls autoPlay width={"100%"} height={"100%"} style={{ borderRadius: '25px' }}>
                    <source src='assets/erkin_etem.mp4' />
                    Браузарът не поддържа видео
                </video>
            </div>
        </section>
    )
}

export default About