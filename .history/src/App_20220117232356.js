
import './index.css';
import { Route } from 'react-router-dom'
import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupsPage from './Pages/NewMeetups';
import FavoritesPage from './Pages/Favorites';


function App() {
  return (
    <div>
      
      <Route path='/'>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetups />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
      
    </div>
  );
}

export default App;
