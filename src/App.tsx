import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ShowPage from './pages/ShowPage';
import EpisodePage from './pages/EpisodePage';
import { store } from './redux/store';

import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ShowPage />} />
            <Route path="/episode/:id" element={<EpisodePage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
