
import './index.css';
import { BrowserRouter } from 'react-router-dom'

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
        <FavoritesPage />
      </Route>
      
    </div>
  );
}

export default App;
