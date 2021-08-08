type DisPatchType = {
    type: string,
    [key: string]: any
}
type StroeType = {
    [key: string]: any
}
const defaultStore: StroeType = {
    'name': { value: undefined },
    "name3": { value: undefined },
}
export default class DefineStore {
    static fnList: Function[] = [];
    static store: StroeType = defaultStore;
    static subscribe(callBack: Function) {
        DefineStore.fnList.push(callBack);
    }
    static dispatch(obj: DisPatchType) {
        const { type, ...param } = obj;
        DefineStore.store[type] = param;
        DefineStore.fnList.forEach(callBack => {
            callBack(DefineStore.store);
        })
    }
}