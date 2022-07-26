import  { createContext,useState } from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (_favoriteMeetup) => {},
    removeFavorite: (_meetupId) => {},
    itemIsFavorite: (_meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites,setUserFavorites] = useState([])

    function addFavoriteHandler(_favoriteMeetup) {
        setUserFavorites((prevUserFavorites)=> {
            return prevUserFavorites.concat(_favoriteMeetup);
        });
    }

    function removeFavoriteHandler(_meetupId) {
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.filter(meetup => meetup.id !== _meetupId);
        });
    }

    function itemIsFavoriteHandler(_meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
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

export default FavoritesContext
