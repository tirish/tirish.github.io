const storage = window.localStorage || {};

export function set(key, value){
    storage[key] = JSON.stringify(value);
}

export function get(key){
    const value = storage[key];
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
}
