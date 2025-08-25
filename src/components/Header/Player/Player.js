import './Player.css';
import { useState } from 'react';

export default function Player({ initName, symbol }) {
    const [editing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initName);

    let playerContent = <span className='player-name'>{playerName}</span>
    let editButtonText = 'Edit';
    if (editing) {
        playerContent = <input
            type="text"
            className='player-name-input'
            defaultValue={playerName}
            // onBlur={toggleEditing}
            onChange={handleNameChange}
            autoFocus
        />
        editButtonText = 'Save';
    }
    return (
        <li className="player">

            {playerContent}
            <span className='player-symbol'>{symbol}</span>

            <button className='edit-player-btn' onClick={toggleEditing}>{editButtonText}</button>
        </li>
    );

    function toggleEditing(event) {
        setEditing(editing => {
            const newEditing = !editing;
            console.log(`Editing mode is now ${newEditing ? 'on' : 'off'}`);
            return newEditing;
        });
    }

      function handleNameChange(event) {
        setPlayerName(event.target.value);
    }
}