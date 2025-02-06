import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About, Error404, Home } from './components/Pages';
import { Navigation } from './components/Navigation';
import { CharacterList } from './components/CharacterList';
import { Character } from './components/Character';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:characterId" element={<Character />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
