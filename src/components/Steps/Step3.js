import { useState } from "react"

const Step3 = () => {

    const [educations, setEducations] = useState([
        { id: 0, place: '', faculty: '', speciality: '', start: '', finish: '' },
    ])

    const addEducation = () => {
        setEducations([...educations, { id: educations.length, place: '', faculty: '', speciality: '', start: '', finish: '' }])
    }

    const removeEducation = (id) => {
        const copyEducations = [...educations]
        copyEducations.splice(id, 1)
        for (let i = 0; i < copyEducations.length; i++) {
            copyEducations[i].id = i
        }
        setEducations(copyEducations)
    }

    const changeDataHandler = (event, id) => {
        console.log(event.target.name)
        const key = event.target.name
        const copyEducations = educations.map(
            element => element.id === id ? { ...element, [key]: event.target.value } : element
        )
        setEducations(copyEducations)
    }

    return (
        <div>
            <h3>Шаг 3: Образование</h3>
            {educations.map(el => {
                return (
                    <div className="step__form" key={el.id}>
                        <label htmlFor="place">Учебное заведение:</label>
                        <input
                            placeholder="Введите название учебного заведения"
                            name="place"
                            id="place"
                            value={el.place}
                            onChange={event => changeDataHandler(event, el.id)}
                        />

                        <label htmlFor="faculty">Факультет:</label>
                        <input
                            placeholder="Введите название факультета"
                            name="faculty"
                            id="faculty"
                            value={el.faculty}
                            onChange={event => changeDataHandler(event, el.id)}
                        />

                        <label htmlFor="speciality">Специальность:</label>
                        <input
                            placeholder="Введите название специальности"
                            name="speciality"
                            id="speciality"
                            value={el.speciality}
                            onChange={event => changeDataHandler(event, el.id)}
                        />

                        <label htmlFor="start">Дата начала обучения:</label>
                        <input
                            type='month'
                            id="start"
                            name="start"
                            value={el.start}
                            onChange={event => changeDataHandler(event, el.id)}
                        />

                        <label htmlFor="finish">Дата окончания обучения:</label>
                        <input
                            type='month'
                            id="finish"
                            value={el.finish}
                            onChange={event => changeDataHandler(event, el.id)}
                            name="finish"
                        />

                        <button onClick={() => removeEducation(el.id)}>Удалить</button>
                    </div>
                )
            })}

            <button onClick={addEducation}>Добавить место обучения</button>
            <button>Назад</button>
            <button>Готово</button>


        </div>
    )
}

export default Step3