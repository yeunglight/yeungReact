export function Person<T>(key: T): T {
    console.log(key);
    return key;
}