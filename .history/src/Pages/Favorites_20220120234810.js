import React, { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);
    return (
        <section>
          <h1>M</h1>  Favorites Page
        </section>
    )
}

export default FavoritesPage
