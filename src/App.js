import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { MovieDetailsPage } from './Pages/MovieDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
