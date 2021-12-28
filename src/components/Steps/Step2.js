import React, { useState } from "react";

const Step2 = () => {
    const [workExperiance, setWorkExperiance] = useState([])

    const addWorkExperiace = () => {
        setWorkExperiance([...workExperiance, { id: workExperiance.length, workPlace: '', position: '', startWork: '', finishWork: '' }])
    }

    const removeWorkExperiace = (id) => {
        const copyWorkExperiance = [...workExperiance]
        copyWorkExperiance.splice(id, 1)
        for (let i = 0; i < copyWorkExperiance.length; i++) {
            copyWorkExperiance[i].id = i
        }
        setWorkExperiance(copyWorkExperiance)
    }
    return (
        <div>
            <h3>Шаг 2: Опыт работы</h3>
            {workExperiance.map(el => {

                return <div key={el.id} className="step__form">
                    <label htmlFor="workPlace">Место работы:</label>
                    <input
                        placeholder="введите место работы"
                        id="workPlace"
                        name="workplace"
                    />

                    <label htmlFor="position">Должность:</label>
                    <input
                        placeholder="введите должность"
                        id="position"
                        name="position"
                    />

                    <label htmlFor="startWork">Дата начала работы:</label>
                    <input
                        type='month'
                        id="startWork"
                        name="startWork"
                        value={el.startWork}
                        onChange={event => setWorkExperiance(
                            workExperiance.map(
                                element => element.id === el.id ? { ...element, startWork: event.target.value } : element
                            )
                        )}
                    />

                    <label htmlFor="finishWork">Дата окончания работы:</label>
                    <input
                        type='month'
                        id="finishWork"
                        value={el.finishWork}
                        onChange={event => setWorkExperiance(
                            workExperiance.map(
                                element => element.id === el.id ? { ...element, finishWork: event.target.value } : element
                            )
                        )}
                        name="finishWork"
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