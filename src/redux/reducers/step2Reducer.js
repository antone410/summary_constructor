const initialState = []

const Step2Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addWorkPlace':
            return [...state, { id: state.length, workplace: '', position: '', start: '', finish: '' }]
        case 'removeWorkExperiace':  
            const copyWorkExperiance = [...state]
            copyWorkExperiance.splice(action.id, 1)
            for (let i = 0; i < copyWorkExperiance.length; i++) {
                copyWorkExperiance[i].id = i
            }
            return copyWorkExperiance;
        case 'changeDataHandler':
            const key = action.event.target.name
            return [...state].map(
                element => element.id === action.id ? { ...element, [key]: action.event.target.value } : element
            )
        default:
            return state
    }

}

export default Step2Reducer