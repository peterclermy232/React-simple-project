
import './index.css';
import { Route, Routes} from 'react-router-dom'
import AllMeetups from './Pages/AllMeetups';
import NewMeetups from './Pages/NewMeetups';
import Favorites from './Pages/Favorites';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/'>
        <AllMeetups  />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetups />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
