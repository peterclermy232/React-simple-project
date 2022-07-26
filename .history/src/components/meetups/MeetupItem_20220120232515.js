import  { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context';
import './MeetupItem.css'
import Card from './ui/Card'

function MeetupItem(props) {
    function toggleFavoriteStatusHandler(){
       const favorites useContext(FavoritesContext);
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
                <button onClick={toggleFavoriteStatusHandler}>TO Favorites</button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem
