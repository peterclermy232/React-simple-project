
import './index.css';
import { Route} from 'react-router-dom'
import AllMeetups from './Pages/AllMeetups';
import NewMeetups from './Pages/NewMeetups';
import Favorites from './Pages/Favorites';


function App() {
  return (
    <div>
      <rou
      <Route path='/'>
        <AllMeetups  />
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
