
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
      <Route path='/'
    </div>
  );
}

export default App;
