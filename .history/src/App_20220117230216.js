
import './index.css';
import { Route } from 'react-router-dom'
import AllMeetups from './Pages/AllMeetups';
import NewMeetups from './Pages/NewMeetups';


function App() {
  return (
    <div>
      <AllMeetups/>
      <NewMeetups />
      <Fav
      
    </div>
  );
}

export default App;