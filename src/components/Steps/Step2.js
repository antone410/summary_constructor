import React, { useState } from "react";

const Step2 = () => {
    const [workExperiance, setWorkExperiance] = useState([])

    const addWorkExperiace = () => {
        setWorkExperiance([...workExperiance, { id: workExperiance.length, workplace: '', position: '', start: '', finish: '' }])
    }

    const removeWorkExperiace = (id) => {
        const copyWorkExperiance = [...workExperiance]
        copyWorkExperiance.splice(id, 1)
        for (let i = 0; i < copyWorkExperiance.length; i++) {
            copyWorkExperiance[i].id = i
        }
        setWorkExperiance(copyWorkExperiance)
    }

    const changeDataHandler = (event, id) => {
        console.log(event.target.name)
        const key = event.target.name
        const copyWorkExperiance = workExperiance.map(
            element => element.id === id ? { ...element, [key]: event.target.value } : element
        )
        setWorkExperiance(copyWorkExperiance)
    }

    return (
        <div>
            <h3>Шаг 2: Опыт работы</h3>
            {workExperiance.map(el => {

                return <div key={el.id} className="step__form">
                    <label htmlFor="workplace">Место работы:</label>
                    <input
                        placeholder="введите место работы"
                        id="workplace"
                        name="workplace"
                        value={el.workplace}
                        onChange={event => changeDataHandler(event, el.id)}
                    />

                    <label htmlFor="position">Должность:</label>
                    <input
                        placeholder="введите должность"
                        id="position"
                        name="position"
                        value={el.position}
                        onChange={event => changeDataHandler(event, el.id)}
                    />

                    <label htmlFor="start">Дата начала работы:</label>
                    <input
                        type='month'
                        id="start"
                        name="start"
                        value={el.start}
                        onChange={event => changeDataHandler(event, el.id)}
                    />

                    <label htmlFor="finish">Дата окончания работы:</label>
                    <input
                        type='month'
                        id="finish"
                        value={el.finish}
                        onChange={event => changeDataHandler(event, el.id)}
                        name="finish"
                    />

                    <button onClick={() => removeWorkExperiace(el.id)}>Удалить место работы</button>
                </div>
            })}

            <button onClick={addWorkExperiace}>Добавить место работы</button>

            <button>Назад</button>
            <button onClick={() => console.log(workExperiance)}>Далее</button>
        </div>
    )
}

export default Step2