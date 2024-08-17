import { useState } from "react"
import Lobbies from "../Lobbies/Lobbies"


function Home(){

    const [filters, setFilters] = useState([])
    const [search, setSearch] = useState([])

    function dynamicSearch(){

    }
    function filterLobbies(){


    }
    

    return(
    <>
    <div className="filter-bar">
        <button>Create Lobby</button>
        <button>Friendship</button>
        <button>World Bosses</button>
        <button>Kath / Dailes</button>
        <button>Domains</button>
        <button>Weekly Bosses</button>
        <input placeholder="Search..." type="text" ></input>
    </div>
    <div className="lobby-holder">
        <Lobbies/>
    </div>

    </>)


}


export default Home