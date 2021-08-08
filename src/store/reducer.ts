import { REDUX_TEST, REDUX_TEST1 } from "./actionType";

export interface ActionType {
    type: string,
    [key: string]: any,
}

export interface StoreDeafultType {
    [REDUX_TEST]: string,
    [REDUX_TEST1]: string,
}

const defaultState: StoreDeafultType = {
    [REDUX_TEST]: '1',
    [REDUX_TEST1]: '2',
}

function reducer(state = defaultState, action: ActionType) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case REDUX_TEST:
            newState[REDUX_TEST] = action.value;
            break;
        case REDUX_TEST1:
            newState[REDUX_TEST1] = action.value;
            break;
        default:
            break;
    }
    return newState;
}
export default reducer;