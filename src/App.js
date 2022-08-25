import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import NotFoundPage from './Components/NotFoundPage';
import UserCard from './Components/UserCard';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserCard />} />
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
