import './App.css';
import { useState } from 'react';
import { StoryPoint } from './api/models';
import { Route, Routes } from 'react-router-dom';
import { GamePage } from './pages/GamePage/GamePage';
import { HomePage } from './pages/HomePage/HomePage';
import SandboxPage from './pages/SandboxPage/SandboxPage';

function App() {
  const [storyPoint, setStoryPoint] = useState<StoryPoint>({
    id: 1,
    choices: [{ choice: 'got to 2', destination: 2 }],
    image: { url: 'my/image/url/1' },
    text: 'some story',
  });

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route
        path='/gamepage'
        element={
          <GamePage storyPoint={storyPoint} setStoryPoint={setStoryPoint} />
        }
      />
      <Route path='/sandbox' element={<SandboxPage />}></Route>
    </Routes>
  );
}

export default App;
