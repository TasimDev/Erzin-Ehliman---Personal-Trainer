
'use client'
import { useState } from 'react';

const Calcolator = () => {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('lifebasis');
  const [calories, setCalories] = useState("0");
  const [minCalories, setMinCalories] = useState("0");
  const [maxCalories, setMaxCalories] = useState("0");



  const calculateCalories = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageValue = parseFloat(age);

    // Formula for calculating Basal Metabolic Rate (BMR)
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageValue + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageValue - 161;
    }

    // Adjust BMR based on activity level
    let adjustedBMR;
    switch (activityLevel) {
      case 'lifebasis':
        adjustedBMR = bmr * 1.2;
        break;
      case 'active':
        adjustedBMR = bmr * 1.375;
        break;
      case 'normalactive':
        adjustedBMR = bmr * 1.55;
        break;
      case 'verryactive':
        adjustedBMR = bmr * 1.725;
        break;
      default:
        adjustedBMR = bmr;
    }

    // Calculate minimum and maximum calories (e.g., -10% and +10% of adjusted BMR)
    const minCaloriesValue = adjustedBMR * 0.9;
    const maxCaloriesValue = adjustedBMR * 1.1;

    setCalories(adjustedBMR.toFixed(2));
    setMinCalories(minCaloriesValue.toFixed(2));
    setMaxCalories(maxCaloriesValue.toFixed(2));
  };

  return (
    <section id="calcolator">
      <div className="title">
        <h2>Калориен Калкулатор</h2>

      </div>
      <div className="container">

        <div className="calcolator-side">
          <div className='form'>
            <div className='form-section'>
              <div className="form-input">
                <label htmlFor="height" className='label-title'>Височина</label>
                <input type="text" name="height" id="height" placeholder='см' required value={height} onChange={(e) => setHeight(e.target.value)} />
              </div>
              <div className="form-input">
                <label htmlFor="wight" className='label-title'>Тегло</label>
                <input type="text" name="wight" id="weight" placeholder='кг' required value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
            </div>
            <div className='form-section'>
              <div className="form-input">
                <label htmlFor="year" className='label-title'>Години</label>
                <input type="number" name="year" id="year" placeholder='2-80год.' required value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="form-input">
                <label className='label-title'>Пол</label>
                <div className="radio-container">
                  <div className="radio-div">
                    <label htmlFor="male">Мъж</label>
                    <input type="radio" name="sex" id="male" value='male' required checked={gender === 'male'}
                      onChange={() => setGender('male')} />
                  </div>
                  <div className="radio-div">
                    <label htmlFor="female">Жена</label>
                    <input type="radio" name="sex" id="female" value='female' required checked={gender === 'female'}
                      onChange={() => setGender('female')} />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-section-option">
              <div className="form-input">
                <label>Тренировачно ниво: </label>
                <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} >
                  <option value="lifebasis">Базиран на начина на живот</option>
                  <option value="active">Активен (2-3 седмично)</option>
                  <option value="normalactive">Нормална активност (4 - 5)</option>
                  <option value="verryactive">Много Активен (6 дена седмично)</option>
                </select>
              </div>
            </div>
            <input type="submit" value="Изчисли" onClick={calculateCalories} />
          </div>
        </div>
        <div className="line-div"></div>
        <div className="result-side">
          <div className="result-title"><span>Резултат</span></div>
          {calories !== null && !isNaN(calories) && (
            <div className='result-container'>
              <div className="result-item">
                <span className='result-item-title'>Поддържане на тегло: </span>
                <div className="result">{calories}<br /><span>калории/ден</span></div>
              </div>
              <div className="result-item">
                <span className='result-item-title'>Покачване на тегло: </span>
                <div className="result">{maxCalories} <br /><span>калории/ден</span></div>
              </div>
              <div className="result-item">
                <span className='result-item-title'>Плавно отслабване: </span>
                <div className="result"> {minCalories}<br /><span>калории/ден</span></div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Calcolator