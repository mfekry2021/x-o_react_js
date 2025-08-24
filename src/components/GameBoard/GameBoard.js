import "./GameBoard.css"
const initBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard(){
    return (
        <ul className="game-board">
            {initBoard.map((row, rowIndex) => (
                <li key={rowIndex} className="board-row">
                    <ul>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex} className="board-slot">{playerSymbol}</li>
                        ))}
                    </ul>

                </li>
            ))}
        </ul>

    )
}