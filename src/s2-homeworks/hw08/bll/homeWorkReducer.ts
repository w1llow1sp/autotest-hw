import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case "sort": {
            const newState = [...state];
            if (action.payload === "up") {
                return newState.sort((a, b) =>
                    a.name.localeCompare(b.name));
            } else if (action.payload === "down") {
                return newState.sort((a, b) =>
                    b.name.localeCompare(a.name));
            } else {
                return state;
            }
        }
        case "check": {
            return state.filter((u) => u.age >= action.payload);
        }
        default:
            return state;
    }
};
