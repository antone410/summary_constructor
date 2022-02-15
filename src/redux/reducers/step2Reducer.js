const initialState = []

const Step2Reducer = (state = initialState, action) => {
    const copyWorkExperiance = [...state]
    const key = action.event.target.name

    switch (action.type) {
        case 'addWorkPlace':
            return [...state, { id: state.length, workplace: '', position: '', start: '', finish: '' }]
        case 'removeWorkExperiace':  
            copyWorkExperiance.splice(action.id, 1)
            for (let i = 0; i < copyWorkExperiance.length; i++) copyWorkExperiance[i].id = i
            return copyWorkExperiance;
        case 'changeDataHandler':
            return [...state].map(
                element => element.id === action.id ? { ...element, [key]: action.event.target.value } : element
            )
        default:
            return state
    }

}

export default Step2Reducer