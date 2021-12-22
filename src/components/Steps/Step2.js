import React, { useState } from "react";

const Step2 = () => {
    const [workExperiance, setWorkExperiance] = useState([
        { id: 0, workPlace: '', position: '', startWork: '', finishWork: '' }
    ])

    const addWorkExperiace = () => {
        setWorkExperiance([...workExperiance, { id: workExperiance.length, workPlace: '', position: '', startWork: '', finishWork: '' }])
    }

    const removeWorkExperiace = (event, id) => {
        // FIXME: this method is incorrect!
        event.preventDefault()
        setWorkExperiance(workExperiance.splice(id, 1))
    }
    return (
        <div>
            <h3>Шаг 2: Опыт работы</h3>
            {workExperiance.map(el => {

                return <form key={el.id} className="step__form">
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

                    <button onClick={(event) => removeWorkExperiace(event, el.id)}>Удалить место работы</button>


                </form>
            })}

            <button onClick={addWorkExperiace}>Добавить место работы</button>

            <button>Назад</button>
            <button onClick={() => console.log(workExperiance)}>Далее</button>
        </div>
    )
}

export default Step2