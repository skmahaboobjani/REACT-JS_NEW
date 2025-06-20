
import React, { useState } from "react";

function App() {
    const games = ["cricket", "volleyball", "hockey"];

    const [selectedGames, setSelectedGames] = useState([]);
 console.log(selectedGames);
    const handleChange = (e) => {
        const value = e.target.value;

        
        if(!selectedGames.includes(value))
        {
            
         
            // setSelectedGames([...selectedGames, value])
            setSelectedGames([value])
        }
        else
        {
            setSelectedGames(selectedGames.filter((m,n)=>m!=value))
        }


    };

    return (
        <div>
            {games.map((game, index) => (
                <li key={index}>
                    <input
                        type="radio"
                        value={game}
                        checked={selectedGames.includes(game)}
                        onChange={handleChange}
                    />
                    {game}
                </li>
            ))}

           {selectedGames.map((x)=><li>{x}</li>)}
        </div>
    );
}

export default App;

