import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './PageComponents/Home';
import SingleMovei from './PageComponents/SingleMovei';
import ErrorPage from './PageComponents/ErrorPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/moveis/:id' element={<SingleMovei />}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;
