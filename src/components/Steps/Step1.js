import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const Step1 = () => {

    const dispatch = useDispatch()
    const [formWarningVisible, setFormWarningVisible] = useState(false)

    const state = useSelector(state => state.step1Reducer)
    const checkForm = () => {
       if (state.name && state.surname && state.city && state.date) {
           setFormWarningVisible(false)
           dispatch({type: 'switchToStep2'})
        }else {
            setFormWarningVisible(true)
        }
    }
    return (
        <div>
            <h3>Шаг 1: Основаня информация</h3>
            <div className='step__form'>
                <label htmlFor='name'>Имя:</label>
                <input
                    id='name'
                    name='name'
                    placeholder="введите имя"
                    value={useSelector(state => state.step1Reducer.name)}
                    onChange={event => dispatch({ type: 'change', event })}
                />

                <label htmlFor='surname'>Фамилия: </label>
                <input
                    id='surname'
                    name='surname'
                    placeholder="введите фамилию"
                    value={useSelector(state => state.step1Reducer.surname)}
                    onChange={event => dispatch({ type: 'change', event })}
                />

                <label htmlFor='city'>Город:</label>
                <input
                    id='city'
                    name='city'
                    placeholder="введите город"
                    value={useSelector(state => state.step1Reducer.city)}
                    onChange={event => dispatch({ type: 'change', event })}
                />

                <label htmlFor='date'>Дата рождения:</label>
                <input
                    type='date'
                    id='date'
                    name="date"
                    value={useSelector(state => state.step1Reducer.date)}
                    onChange={event => dispatch({ type: 'change', event })} 
                />
                {/* TODO: add category PHOTO in future */}
            </div>
            <button>Назад</button>
            <button onClick={checkForm}>Далее</button>
            {formWarningVisible && <p className='form__warning'>Заполните обязательные поля!</p>}
        </div >
    )
}


export default Step1