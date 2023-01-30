import { createSlice } from '@reduxjs/toolkit';
import { appStorageName } from '../../globals/globalVariables';


function getFavs() {
    let storedFavs = localStorage.getItem(appStorageName);
    if (storedFavs === null) {
        storedFavs = [];
    } else {
        storedFavs = JSON.parse(storedFavs);
    }
    return storedFavs;
}

const initialState = {
    items: getFavs()
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favsSlice = createSlice({
    name: 'favs',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const favsList = [...state.items, action.payload];
            localStorage.setItem(appStorageName, JSON.stringify(favsList));
            state.items = favsList;
        },
        deleteMovie: (state, action) => {
            const favsCopy = state.items;
            favsCopy.splice(getIndex(action.payload, state.items), 1);
            localStorage.setItem(appStorageName, JSON.stringify(favsCopy));
            state.items = favsCopy;
        }
    },
});

export const {addMovie, deleteMovie} = favsSlice.actions

export default favsSlice.reducer;