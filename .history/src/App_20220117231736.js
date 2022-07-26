
import './index.css';
import { Route, Routes} from 'react-router-dom'
import AllMeetups from './Pages/AllMeetups';
import NewMeetups from './Pages/NewMeetups';
import Favorites from './Pages/Favorites';


function App() {
  return (
    <div>
      <Routes>
      <Routes path='/'>
        <AllMeetups  />
      </Routes>
      <Routes path='/new-meetup'>
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
