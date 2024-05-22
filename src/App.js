import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import StoryCollections from './StoryCollections';
import StoryBlogs from './StoryBlogs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id'>
          <Route path='/:id/:id' element={<StoryBlogs />} />
          <Route index element={<StoryCollections />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
