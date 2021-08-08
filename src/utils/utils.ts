export class Utils {
    static getProto(obj: any, param: string, value: string | number | boolean) {
        let current = obj;
        let flag = true;
        while (flag && current[param]) {
            if (current[param] === value) {
                flag = false;
            } else {
                if (current.next) {
                    current = current.next;
                } else {
                    current = undefined;
                    flag = false;
                    console.error(`No object with ${param} equal to ${value} was found`);
                }
            }
        }
        return current;
    }

    static insertProto(obj: any, param: string, value: string | number | boolean, insertObj: any) {
        let current = obj;
        let flag = true;
        while (flag && current[param]) {
            if (current[param] === value) {
                insertObj.next = current.next;
                current.next = insertObj;
                flag = false;
            } else {
                if (current.next) {
                    current = current.next;
                } else {
                    current = undefined;
                    flag = false;
                    console.error(`No object with ${param} equal to ${value} was found`);
                }
            }
        }
    }

    static deleteProto(obj: any, param: string, value: string | number | boolean) {
        const arr = [];
        let current = obj;
        let flag = true;
        let pre: any;
        while (flag && current[param]) {
            if (current[param] === value) {
                flag = false;
                pre = current.next;
            } else {
                const { next, ...param } = current;
                if (next) {
                    arr.push(param);
                    current = current.next;
                }
            }
        }
        let res: any = {};
        arr.forEach((item, index) => {
            if (index === 0) {
                res = item;
            } else {
                res.next = item;
            }
        })
        res.next = pre;
        return res;
    }
    static editProto(obj: any, param: string, value: string | number | boolean, editKey: string, editValue: any) {
        let current = obj;
        let flag = true;
        while (flag && current[param]) {
            if (current[param] === value) {
                flag = false;
                current[editKey] = editValue;
            } else {
                if (current.next) {
                    current = current.next;
                } else {
                    current = undefined;
                    flag = false;
                    console.error(`No object with ${param} equal to ${value} was found`);
                }
            }
        }
    }

    static getEle(obj: any, value: string) {
        const current = obj;
        let result;
        if (current.elmeentid === value) {
            result = current;
        } else {
            if (current.childElements && Array.isArray(current.childElements.data)) {
                current.childElements.data.some((item: any) => {
                    const res = this.getEle(item, value);
                    if (res) {
                        result = res;
                        return true;
                    } else {
                        result = undefined;
                    }
                })
            } else {
                result = undefined;
            }
        }
        return result;
    }

}