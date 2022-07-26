import  { createContext,useState } from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props) {
    const [userFavorites,setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites)=> {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler() {
        return userFavorites.some(meetup => meetup.id === m)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider()