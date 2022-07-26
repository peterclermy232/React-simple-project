import  { createContext } from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider() {
    return (
        <div>
            
        </div>
    )
}

export default FavoritesContextProvider()
