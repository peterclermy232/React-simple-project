
import './index.css';
import { Route } from 'react-router-dom'
import AllMeetups from './Pages/AllMeetups';
import NewMeetups from './Pages/NewMeetups';
import Favorites from './Pages/Favorites';


function App() {
  return (
    <div>

      <Route path='/'>
        <AllMeetups />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetups />
      </Route>
      <Route path='/favorites'>
        <F
      </Route>
    </div>
  );
}

export default App;
