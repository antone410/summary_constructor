import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

const Step2 = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.step2Reducer)
    const [formWarningVisible, setFormWarningVisible] = useState(false)
    const checkForm = () => {
        let checkStatus = false
        state.forEach(element => {
            for (let key in element) if (!element[key] && key !== 'id') checkStatus = true
        });
        setFormWarningVisible(checkStatus)
        if (!checkStatus) dispatch({type: 'switchToStep3'})
    }

    return (
        <div>
            <h3>Шаг 2: Опыт работы</h3>
            {useSelector(state => state.step2Reducer).map(el => {

                return <div key={el.id} className="step__form">
                    <label htmlFor="workplace">Место работы:</label>
                    <input
                        placeholder="введите место работы"
                        id="workplace"
                        name="workplace"
                        value={el.workplace}
                        onChange={event => dispatch({type: 'changeDataHandler' ,event, id: el.id})}
                    />

                    <label htmlFor="position">Должность:</label>
                    <input
                        placeholder="введите должность"
                        id="position"
                        name="position"
                        value={el.position}
                        onChange={event => dispatch({type: 'changeDataHandler' ,event, id: el.id})}
                    />

                    <label htmlFor="start">Дата начала работы:</label>
                    <input
                        type='month'
                        id="start"
                        name="start"
                        value={el.start}
                        onChange={event => dispatch({type: 'changeDataHandler' ,event, id: el.id})}
                    />

                    <label htmlFor="finish">Дата окончания работы:</label>
                    <input
                        type='month'
                        id="finish"
                        value={el.finish}
                        onChange={event => dispatch({type: 'changeDataHandler' ,event, id: el.id})}
                        name="finish"
                    />

                    <button onClick={() => dispatch({type: 'removeWorkExperiace', id: el.id})}>
                        Удалить место работы
                    </button>
                </div>
            })}
            <button>Назад</button>
            <button onClick={() => checkForm()}>Далее</button>
            <button onClick={() => dispatch({type: 'addWorkPlace'})}>Добавить место работы</button>
            {formWarningVisible && <p className='form__warning'>Заполните обязательные поля!</p>}
        </div>
    )
}

export default Step2