import React from "react";


class Step1 extends React.Component {

    state = {
        formWarningVisible: false,
        firstNameValue: '',
        secondNameValue: '',
        cityValue: '',
        date: ''
    }


    nextButtonHandler() {
        this.state.firstNameValue &&
            this.state.secondNameValue &&
            this.state.cityValue &&
            this.state.date ?
            this.setState({ formWarningVisible: false }) : this.setState({ formWarningVisible: true })
    }

    render() {
        return (
            <div>
                <h3>Шаг  1: Основаня информация</h3>
                <form className='step__form'>
                    <label htmlFor='firstName'>Имя: </label>
                    <input
                        id='firstName'
                        value={this.state.firstNameValue}
                        name='firstName'
                        placeholder="введите имя"
                        onChange={event => this.setState({ firstNameValue: event.target.value })}
                    />

                    <label htmlFor='secondName'>Фамилия: </label>
                    <input
                        id='secondName'
                        value={this.state.secondNameValue}
                        name='secondName'
                        placeholder="введите фамилию"
                        onChange={event => this.setState({ secondNameValue: event.target.value })}
                    />

                    <label htmlFor='city'>Город: </label>
                    <input
                        id='city'
                        value={this.state.cityValue}
                        name='city'
                        placeholder="введите город"
                        onChange={event => this.setState({ cityValue: event.target.value })}
                    />

                    <label htmlFor='date'>Дата рождения:</label>
                    <input
                        type='date'
                        id='date'
                        value={this.state.date}
                        name="date"
                        onChange={event => this.setState({ date: event.target.value })} />

                    {/* TODO: add category PHOTO in future */}
                </form>

                {this.state.formWarningVisible && <p className='form__warning'>Заполните обязательные поля!</p>}

                <button onClick={this.nextButtonHandler.bind(this)}>Далее</button>
            </div >
        )
    }

}

export default Step1