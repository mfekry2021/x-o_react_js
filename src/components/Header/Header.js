import './Header.css'
import Player from './Player/Player.js';
export default function Header() {
  return (
    <header className="header">
      <ul className="players">
        <Player initName="Fekry" symbol="X"/>
        <Player initName="Yasso" symbol="O"/>
        </ul>
    </header>
  );
}