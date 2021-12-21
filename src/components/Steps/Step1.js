import React from "react";


class Step1 extends React.Component {



    constructor(props) {
        super(props)

        this.state = {
            formWarningVisible: false,
            firstNameChecked: false,
            secondNameChecked: false,
            cityChecked: false,
        }
    }

    inputsCheck(event) {
        switch (event.target.id) {
            case 'firstName':
                event.target.value ? this.setState({ firstNameChecked: true }) : this.setState({ firstNameChecked: false })
                break;
            case 'secondName':
                event.target.value ? this.setState({ secondNameChecked: true }) : this.setState({ secondNameChecked: false })
                break;
            case 'cityName':
                event.target.value ? this.setState({ cityChecked: true }) : this.setState({ cityChecked: false })
                break;
            default: break;
        }
    }

    formWarningVisibleHandler() {
        //TODO: function for check inputs
    }

    render() {
        return (
            <div>
                <h3>Step 1: Основаня информация</h3>
                <form className='step1__form'>
                    <label htmlFor='firstName'>Имя: </label>
                    <input id='firstName' name='firstName' placeholder="введите имя" onChange={event => this.inputsCheck(event)} />

                    <label htmlFor='secondName'>Фамилия: </label>
                    <input id='secondName' name='secondName' placeholder="введите фамилию" onChange={event => this.inputsCheck(event)} />

                    <label htmlFor='city'>Город: </label>
                    <input id='city' name='city' placeholder="введите город" onChange={event => this.inputsCheck(event)} />

                    <label htmlFor='date'>Дата рождения:</label>
                    <input type='date' id='date' name="date" />
                </form>
                {this.state.formWarningVisible && <p class='form__warning'>Заполните обязательные поля!</p>}
                <button onClick={this.formWarningVisibleHandler}>Далее</button>
            </div >
        )
    }

}

export default Step1