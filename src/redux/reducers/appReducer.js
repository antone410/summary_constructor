const initialState = {
    step1Visible: true,
    step2Visible: false,
    step3Visible: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'switchToStep2':
            return {...state, step1Visible: false, step2Visible: true}
        case 'switchToStep3':
            return {...state, step2Visible: false, step3Visible: true}
        default:
            return state
    }

}

export default appReducer;