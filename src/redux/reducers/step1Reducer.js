const initialState = {
    name: '',
    surname: '',
    city: '',
    date: ''
}

const Step1Reducer = (state = initialState, action) => {
    const key = action.event.target.name
    switch (action.type) {
        case 'change':
            return { ...state, [key]: action.event.target.value }
        case 'check':
            return (state.name && state.surname && state.city && state.date) ?
                { ...state, formWarningVisible: false } : { ...state, formWarningVisible: true }
        default:
            return state
    }

}

export default Step1Reducer