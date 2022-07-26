import  { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context';
import './MeetupItem.css'
import Card from './ui/Card'

function MeetupItem(props) {
    
       const favoritesCtx = useContext(FavoritesContext);

       const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

       function toggleFavoriteStatusHandler(){
           if(itemIsFavorite){
               favoritesCtx.removeFavorite(props.id);
           }else{
               favoritesCtx.addFavorite({
                   id: props.id,
                   title: props.title,
                   description: props.description,
                   image: props.image,
                   address: props.address,
               });
           }
    }
    return (
        <li className="item">
            <Card>
            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className="actions">
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'remove from avorites'}</button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem
