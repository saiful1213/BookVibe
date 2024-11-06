import { toast } from "react-toastify";

// get from LS
const getFromLocalStorage = () => {
    const wishList = localStorage.getItem('wishList');
    if (wishList) {
        const wishListStr = JSON.parse(wishList);
        return wishListStr;
    }
    else {
        return [];
    }
}

// save to local storage
const saveToLocalStorage = wishListId => {
    const wishListIds = getFromLocalStorage();
    // check book is exist
    if (wishListIds.includes(wishListId)) {
        return toast.error('book already in wishlist')
    }
    else {
        wishListIds.push(wishListId);
        localStorage.setItem('wishList', JSON.stringify(wishListIds));
        toast.success('book added in wish list successfully!!')
    }
};

export { getFromLocalStorage, saveToLocalStorage };