
import './index.css';


import { Route, Routes,Switch } from 'react-router-dom'
import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupsPage from './Pages/NewMeetups';
import FavoritesPage from './Pages/Favorites';
import Layout from './layout/Layout';



function App() {
  return (
    <Layout>
      
      <Switch>
      <Routes>
      <Route path='/' element={ <AllMeetupsPage />}/>
      <Route path='/new-meetup' element={<NewMeetupsPage />}/>
        
      <Route path='/favorites' element={<FavoritesPage />}/>
        
      </Routes>
      </Switch>
    </div>
  );
}

export default App;
