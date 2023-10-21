import {  Routes, Route } from 'react-router-dom'

import AllMeetUp from "./pages/AllMeetUp";
import Favorites from './pages/Favorites';
import NewMeetUP from './pages/NewMeetUp';
import Layout from './components/layouts/Layout';


function App() {
  return (
    
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetUp />} />
        <Route 
          path='/favorites'
          element={<Favorites />}
        />
        <Route 
          path='/new-meetup'
          element={<NewMeetUP />}
        />
      </Routes>
    </Layout>
    
  );
}

export default App;
