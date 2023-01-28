import { DELETE_FAVORITES, ADD_FAVORITES } from "../types"


export function addFavorite(){
    return {
        type: ADD_FAVORITES,
        payload: fav 
    }
}

export function DELETE_FAVORITES(id){
    return{
        type: DELETE_FAVORITES,
        

    }
}