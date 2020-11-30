export const setItem = (key, value) => {
    const storage = localStorage.getItem('storage');
    if (storage) {
        localStorage.setItem('storage', JSON.stringify({...JSON.parse(storage), [key]: value}));
    } else {
        localStorage.setItem('storage', JSON.stringify({[key]: value}));
    }
}

export const getItem = (key) => {
    const storage = localStorage.getItem('storage');
    if (storage) {
        return JSON.parse(storage)[key];
    } else {
        return undefined;
    }
}