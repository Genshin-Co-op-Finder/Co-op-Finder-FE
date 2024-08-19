import { useState } from "react";
import Lobbies from "../Lobbies/Lobbies";

function Home() {

  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  const [lobbies, setLobbies] = useState([]);
  const [filteredLobbies, setFilteredLobbies] = useState([]);




  function dynamicSearch() {}



  function filterLobbies() {
    setFilteredLobbies(
      lobbies.reduce((newLobbies, lobby) => {
        filters.forEach((filter) => {
          if (lobby.tags.contains(filter)) {
            newLobbies.push(lobby);
          }
        });
      }, [])
    );
  }

  function activateFilter(tag){
    if(filters.contains(tag)){
        setFilters(filters.filter((filter) => filter =! tag))
    }else{
        setFilters([...filters, tag])
    }
  }

  return (
    <>
      <div className="filter-bar">
        <button >Create Lobby</button>
        <button onClick={()=>{activateFilter(friendship)}}>Friendship</button>
        <button onClick={()=>{activateFilter(worldBoss)}}>World Bosses</button>
        <button onClick={()=>{activateFilter(kath)}}>Kath / Dailes</button>
        <button onClick={()=>{activateFilter(domain)}}>Domains</button>
        <button onClick={()=>{activateFilter(weeklyBoss)}}>Weekly Bosses</button>
        <input placeholder="Search..." type="text"></input>
      </div>
      <div className="lobby-holder">
        <Lobbies />
      </div>
    </>
  );
}

export default Home;
