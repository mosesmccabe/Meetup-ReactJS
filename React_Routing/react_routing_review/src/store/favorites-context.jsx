import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorite: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props){
    const [userFavorite, setUserFavorite] = useState([]);

    function addFavoriteHandler(favoriteMeeetup){
        // The concat() method of Array instances is used to merge two or more arrays.
        return setUserFavorite((prevUserFavorites) => prevUserFavorites.concat(favoriteMeeetup)); // return a array
    }

    function removeFavoriteHandler(meetupId){
        // The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered 
        // down to just the elements from the given array that pass the test implemented by the provided function.
        return setUserFavorite((prevUserFavorites) => prevUserFavorites.filter(meetup => meetup.id !== meetupId)); // return an array

    }

    function itemIsFavoriteHandler(meetupId){
       //The some() method of Array instances tests whether at least 
       //one element in the array passes the test implemented by the provided function
       return userFavorite.some(meetup => meetup.id === meetupId); // return true or false
    }

    const context = {
        favorite: userFavorite,
        totalFavorites: userFavorite.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;