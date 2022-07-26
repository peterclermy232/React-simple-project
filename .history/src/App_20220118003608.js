
import './index.css';


import { Route, Routes } from 'react-router-dom'
import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupsPage from './Pages/NewMeetups';
import FavoritesPage from './Pages/Favorites';
import MainNavigation from './components/MainNavigation';


function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
      <Route path='/' element={ <AllMeetupsPage />}/>
      <Route path='/new-meetup' element={<NewMeetupsPage />}/>
        
      <Route path='/favorites' element={<FavoritesPage />}/>
        
      </Routes>
      
    </div>
  );
}

export default App;