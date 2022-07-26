
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
      </Routes>
      <Routes path='/favorites'>
        <Favorites />
      </Routes>
      </Route>
    </div>
  );
}

export default App;
