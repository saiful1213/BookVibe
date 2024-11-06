// get fro LS
const getFromLocalStorage = () => {
    let list = [];
    const listStr = localStorage.getItem('readList');
    if (listStr) {
        list = JSON.parse(listStr);
    }
    return list;
}

// save to local storage
const SaveToLocalStorage = bookId => {
    const previousBookIds = getFromLocalStorage();
    const updatedList = [...previousBookIds, bookId];
    // set to LS
    localStorage.setItem('readList', JSON.stringify(updatedList));
}

export { getFromLocalStorage as getFromLS, SaveToLocalStorage };