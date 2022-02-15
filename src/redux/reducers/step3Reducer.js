const initialState = [
    { id: 0, place: '', faculty: '', speciality: '', start: '', finish: '' },
]

const Step3Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addEducation':
            return [...state, { id: state.length, place: '', faculty: '', speciality: '', start: '', finish: '' }]
        case 'removeEducation':  
            const copyEducations = [...state]
            copyEducations.splice(action.id, 1)
            for (let i = 0; i < copyEducations.length; i++) {
                copyEducations[i].id = i
            }
            return copyEducations;
        case 'changeDataHandler':
            const key = action.event.target.name
            return [...state].map(
                element => element.id === action.id ? { ...element, [key]: action.event.target.value } : element
            )
        default:
            return state
    }
}

export default Step3Reducer