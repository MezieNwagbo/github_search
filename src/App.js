import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/searchPage/SearchPage';
import { UserPage } from './pages/userPage/UserPage';
import QueryProvider from './context/queryContext';

function App() {
  return (
    <QueryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path=":user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
}

export default App;
