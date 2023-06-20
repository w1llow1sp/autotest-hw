type InitStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}


export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID' :
            return {
                ...state,
                themeId: Number(action.id)
            }
        default:
            return state
    }
}

export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number):any => {
    return {
        type: 'SET_THEME_ID',
        id
    } as const
}// fix any
