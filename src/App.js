import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import GameBoard from './components/GameBoard/GameBoard';

function App() {
  return (
    <div className="game-container">
      <Header />
      <GameBoard />

    </div>
  );
}

export default App;
