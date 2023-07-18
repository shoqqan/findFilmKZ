type InitStateType = {
    loader: boolean
}
type SetIsLoadingAT = {
    type: 'SET-IS-LOADING'
    value: boolean
}
type ActionType = SetIsLoadingAT
const initState: InitStateType = {
    loader: false
}

export const setIsLoadingAC = (value): SetIsLoadingAT => (
    {type: 'SET-IS-LOADING', value}
)
export const appReducer = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case "SET-IS-LOADING": {
            return {...state, loader: action.value}
        }
        default: {
            return state
        }
    }
}