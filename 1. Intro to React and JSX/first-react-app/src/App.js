import './App.css';
import Logo from './components/Logo'
import Paragraph from './components/Paragraph';
import Link from './Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Paragraph />
        <Link />
        <h1>Hello React</h1>
        <h2>Let's start learning</h2>
      </header>
    </div>
  );
}

export default App;
