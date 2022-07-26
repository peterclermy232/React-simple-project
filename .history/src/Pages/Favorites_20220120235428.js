import React, { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context'

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no favorites yet.Start adding some?</p>
    } else{
        content = 
    }
    return (
        <section>
          <h1>My Favorites</h1>
          <MeetupList meetups={favoritesCtx.favorites} />  
        </section>
    )
}

export default FavoritesPage
