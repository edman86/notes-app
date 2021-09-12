
export const getDataFromLocalStorage = (dataType) => {
    if (localStorage.getItem(dataType)) {
        return JSON.parse(localStorage.getItem(dataType))    
    }
    return null;
}

export const setDataToLocalStorage = (dataType, data) => {
    localStorage.setItem(dataType, JSON.stringify(data));
}