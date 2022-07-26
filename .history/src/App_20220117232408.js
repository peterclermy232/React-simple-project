
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
        <NewMeetupsPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesP />
      </Route>
      
    </div>
  );
}

export default App;
