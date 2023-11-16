
import React from 'react'

const Calcolator = () => {
  return (
    <section id="calcolator">
       <div className="title">
          <h2>Калориен Калколатор</h2>
        
        </div>
      <div className="container">
       
        <div className="calcolator-side">
            <form action="#">
              <div className='form-section'>
              <div className="form-input">
                <label htmlFor="height" className='label-title'>Височина</label>
                <input type="text" name="height" id="height" placeholder='см' required/>
              </div>
              <div className="form-input">
                <label htmlFor="wight" className='label-title'>Тегло</label>
                <input type="text" name="wight" id="weight" placeholder='кг' required/>
              </div>
              </div>
              <div className='form-section'>
              <div className="form-input">
                <label htmlFor="year" className='label-title'>Години</label>
                <input type="number" name="year" id="year" placeholder='2-80год.' required/>
              </div>
              <div className="form-input">
              <label className='label-title'>Пол</label>
              <div className="radio-container">
                <div className="radio-div">
              <label htmlFor="male">Мъж</label>
              <input type="radio" name="sex" id="male" value='male' required/>
              </div>
              <div className="radio-div">
              <label htmlFor="female">Жена</label>
              <input type="radio" name="sex" id="female" value='female' required/>
              </div>
              </div>
              </div>
              </div>
              <div className="form-section">
              <div className="form-input">
              <label>Тренировачно ниво: </label>
                   <select value="lifebasis">
                       <option value="lifebasis">Базиран на начина на живот</option>
                        <option value="active">Активен (2-3 седмично)</option>
                       <option value="normalactive">Нормална активност (4 - 5)</option>
                      <option value="verry">Много Активен (6 дена седмично)</option>
                  </select>
              </div>
              </div>
              <input type="submit" value="Изчисли" />
            </form>
        </div>
        <div className="line-div"></div>
        <div className="result-side">
          <div className="result-title"><span>Резултат</span></div>
            <div className="result-container">
                  <div className="result-item">
                    <span className='result-item-title'>Поддържане на тегло: </span>
                    <div className="result">0 <br /><span>калории/ден</span></div>
                  </div>
                  <div className="result-item">
                    <span className='result-item-title'>Покачване на тегло: </span>
                    <div className="result">0 <br /><span>калории/ден</span></div>
                  </div>
                  <div className="result-item">
                    <span className='result-item-title'>Плавно отслабване: </span>
                    <div className="result">0 <br /><span>калории/ден</span></div>
                  </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Calcolator