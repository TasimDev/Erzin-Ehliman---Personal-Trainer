
import React from 'react'

const Calcolator = () => {
  return (
    <section id="calcolator">
       <div className="title">
          <h2>Калориен Калколатор</h2>
          <span className="line"></span>
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
              <input type="submit" value="Изчисли" />
            </form>
        </div>
        <div className="image-side">
           <img src="assets/anastase-maragos-7kEpUPB8vNk-unsplash.jpg" alt="calc-image" width="100%" height="100%"/>
        </div>
      </div>
    </section>
  )
}

export default Calcolator