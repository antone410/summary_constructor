import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Step3 = () => {

    const dispatch = useDispatch()
    const state = useSelector(state=>state.step3Reducer)
    const [formWarningVisible, setFormWarningVisible] = useState(false)
    const checkForm = () => {
        let checkStatus = false
        state.forEach(element => {
            for (let key in element) if (!element[key] && key !== 'id') checkStatus = true
        });
        setFormWarningVisible(checkStatus)
    }

    return (
        <div>
            <h3>Шаг 3: Образование</h3>
            {state.map(el => {
                return (
                    <div className="step__form" key={el.id}>
                        <label htmlFor="place">Учебное заведение:</label>
                        <input
                            placeholder="Введите название учебного заведения"
                            name="place"
                            id="place"
                            value={el.place}
                            onChange={event => dispatch({type: 'changeDataHandler', event, id: el.id})}
                        />

                        <label htmlFor="faculty">Факультет:</label>
                        <input
                            placeholder="Введите название факультета"
                            name="faculty"
                            id="faculty"
                            value={el.faculty}
                            onChange={event => dispatch({type: 'changeDataHandler', event, id: el.id})}
                        />

                        <label htmlFor="speciality">Специальность:</label>
                        <input
                            placeholder="Введите название специальности"
                            name="speciality"
                            id="speciality"
                            value={el.speciality}
                            onChange={event => dispatch({type: 'changeDataHandler', event, id: el.id})}
                        />

                        <label htmlFor="start">Дата начала обучения:</label>
                        <input
                            type='month'
                            id="start"
                            name="start"
                            value={el.start}
                            onChange={event => dispatch({type: 'changeDataHandler', event, id: el.id})}
                        />

                        <label htmlFor="finish">Дата окончания обучения:</label>
                        <input
                            type='month'
                            id="finish"
                            value={el.finish}
                            onChange={event => dispatch({type: 'changeDataHandler', event, id: el.id})}
                            name="finish"
                        />
                        <button onClick={() => dispatch({type: 'removeEducation', id: el.id})}>Удалить</button>
                    </div>
                )
            })}
            <button>Назад</button>
            <button onClick={() => checkForm()}>Далее</button>
            <button onClick={() => dispatch({type: 'addEducation'})}>Добавить место обучения</button>
            {formWarningVisible && <p className='form__warning'>Заполните обязательные поля!</p>}
        </div>
    )
}

export default Step3