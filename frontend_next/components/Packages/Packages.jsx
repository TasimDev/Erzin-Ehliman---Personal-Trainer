import Link from 'next/link'
import React from 'react'

const Packages = () => {
  return (
    <section id="packages">

      <div className="package personal-training">
        <div className="container">
          <div className="title">
            <h2>Пакети с индивидуална тренровка с мен</h2>
            <span className='important'>*Всички пакети включват безплатна консултация*</span>
            <p>Еднократна персонална тренировка - <span className='first'>20лв</span></p>
            <p>Пакетите са налични за живеещи в Русе</p>
          </div>
          <div className="package-container">
            <div className="package-card package-first">
              <div className="package-title">
                <h3>Basic</h3>
                <span>Започни първата крачка към целите си.</span>
              </div>
              <ul>
                <span>Съдържание </span>
                <li>Безплатна консултация</li>
                <li>10 броя тренировки</li>
                <li>Едномесъчен срок за използване</li>
              </ul>
              <div className="price">180лв.</div>
              <Link href="#">Купи сега</Link>
            </div>
            <div className="package-card package-second">
              <div className="package-title">
                <h3>Strong</h3>
                <span>Прeпоръчан пакет за начинаещи.</span>
              </div>
              <ul>
                <span>Съдържание </span>
                <li>Безплатна консултация</li>
                <li>15 броя тренировки</li>
                <li>Едномесъчен срок за използване</li>
              </ul>
              <div className="price">270лв.</div>
              <Link href="#">Купи сега</Link>
            </div>
            <div className="package-card package-third">
              <div className="package-title">
                <h3>VIP</h3>
                <span>Пълна месечна тренировка.</span>
              </div>
              <ul>
                <span>Съдържание </span>
                <li>Безплатна консултация</li>
                <li>20 броя тренировки</li>
                <li>Едномесъчен срок за използване</li>
              </ul>
              <div className="price">350лв.</div>
              <Link href="#">Купи сега</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="package online-coatching">
        <div className="container">
          <div className="title">
            <h2>Пакети с хранителни и тренировъчни режими</h2>
            <span className='important'>*Всички пакети включват безплатна консултация*</span>
            <p>Пакетите се изготвят изцяло онлайн с безплатна корекция.</p>
            <p>Всички пакети са съобразени изцяло с вашите нужди и способности.</p>
            <p>Индивидуален хранителен режим - <span>100лв</span></p>
            <p>Индивидуален тренировачен режим - <span>100лв</span></p>
          </div>
          <div className="package-container">
            <div className="package-card package-first-online">
              <div className="package-title">
                <h3>Basic</h3>
                <span>Едномесъчен тренировачен и хранителен режим</span>
              </div>
              <ul>
                <span>Съдържание </span>
                <li>Безплатна консултация</li>
                <li>Индивидуален хранителен режим</li>
                <li>Индивидуален тренировачен режим</li>
                <li>Изготвяне на КАРДИО план според целта.</li>
                <li>Онлайн консултация - в месеца 1 път</li>
                <li>Безплатна корекция - в месеца 1 път</li>
              </ul>
              <div className="price">150лв.</div>
              <Link href="#">Купи сега</Link>
            </div>
            <div className="package-card package-second">
              <div className="package-title">
                <h3>Strong</h3>
                <span>Двумесъчен тренировачен и хранителен режим</span>
              </div>
              <ul>
                <span>Съдържание </span>
                <li>Безплатна консултация</li>
                <li>Индивидуален хранителен режим</li>
                <li>Индивидуален тренировачен режим</li>
                <li>Изготвяне на КАРДИО план според целта.</li>
                <li>Онлайн консултация - през месец</li>
                <li>Безплатна корекция - през месец</li>
              </ul>
              <div className="price">300лв.</div>
              <Link href="#">Купи сега</Link>
            </div>
            <div className="package-card package-third">
              <div className="package-title">
                <h3>VIP</h3>
                <span>Пълна тримесъчна тренировка</span>
              </div>
              <ul>
                <span>Съдържание </span>
                <li>Безплатна консултация</li>
                <li>Индивидуален хранителен режим</li>
                <li>Индивидуален тренировачен режим</li>
                <li>Изготвяне на КАРДИО план според целта.</li>
                <li>Онлайн консултация -  без ограничения</li>
                <li>Безплатна корекция -  без ограничения</li>

              </ul>
              <div className="price">450лв.</div>
              <Link href="#">Купи сега</Link>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Packages