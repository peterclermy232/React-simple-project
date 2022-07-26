
import './index.css';


import { Route, Routes } from 'react-router-dom'
import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupsPage from './Pages/NewMeetups';
import FavoritesPage from './Pages/Favorites';



function App() {
  return (
    <div>
      
      <Switch></Switch>
      <Routes>
      <Route path='/' element={ <AllMeetupsPage />}/>
      <Route path='/new-meetup' element={<NewMeetupsPage />}/>
        
      <Route path='/favorites' element={<FavoritesPage />}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
