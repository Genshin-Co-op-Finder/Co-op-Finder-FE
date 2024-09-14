import { useEffect, useState } from "react";
import Lobbies from "../Lobbies/Lobbies";

function Home() {
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState([]);
  const [lobbies, setLobbies] = useState([
    {"name": "CosmicConquerors", "tags": "friendship"},
    {"name": "PhantomSquad", "tags": "worldBoss"},
    {"name": "NebulaWarriors", "tags": "kath"},
    {"name": "ShadowStrikers", "tags": "domain"},
    {"name": "VoidRiders", "tags": "weeklyBoss"},
    {"name": "GalacticGuards", "tags": "friendship"},
    {"name": "ChaosLegion", "tags": "worldBoss"},
    {"name": "AetherKnights", "tags": "kath"},
    {"name": "QuantumRaiders", "tags": "domain"},
    {"name": "StarlightSentinels", "tags": "weeklyBoss"},
    {"name": "EclipseVanguard", "tags": "friendship"},
    {"name": "NovaElite", "tags": "worldBoss"},
    {"name": "CelestialWolves", "tags": "kath"},
    {"name": "InfinityRaiders", "tags": "domain"},
    {"name": "OblivionOrder", "tags": "weeklyBoss"}]);
  const [filteredLobbies, setFilteredLobbies] = useState([]);



  useEffect(() => {
    console.log(filters);
    filteredSearch()
  }, [filters, lobbies]);

  useEffect(() => {
    console.log(filteredLobbies)
  }, [filteredLobbies]);

  function filteredSearch(){
    var filteredList = lobbies
    if(filters){
      filteredList = filterLobbies()
    }
    if(search){
      filteredList = dynamicSearch(filteredList)
    }
    setFilteredLobbies(filteredList)
  }

  function dynamicSearch(lobbyList) {
    return(lobbyList.filter((lobby) => {
      return lobby.name.toLowerCase().includes(search.toLowerCase)
    }))
  }

  function filterLobbies() {
    return(
      lobbies.reduce((newLobbies, lobby) => {
        filters.forEach((filter) => {
          if (lobby.tags.includes(filter)) {
            newLobbies.push(lobby);
          }
        });
        return newLobbies;
      }, [])
    );
  }

  function activateFilter(tag) {
    if (filters.includes(tag)) {
      setFilters(filters.filter((filter) => filter !== tag));
    } else {
      setFilters([...filters, tag]);
    }
  }

  return (
    <>
      <div className="filter-bar">
        <button>Create Lobby</button>
        <button
          onClick={() => {
            activateFilter("friendship");
          }}
        >
          Friendship
        </button>
        <button
          onClick={() => {
            activateFilter("worldBoss");
          }}
        >
          World Bosses
        </button>
        <button
          onClick={() => {
            activateFilter("kath");
          }}
        >
          Kath / Dailes
        </button>
        <button
          onClick={() => {
            activateFilter("domain");
          }}
        >
          Domains
        </button>
        <button
          onClick={() => {
            activateFilter("weeklyBoss");
          }}
        >
          Weekly Bosses
        </button>
        <input placeholder="Search..." type="text"></input>
      </div>
      <div className="lobby-holder"></div>
    </>
  );
}

export default Home;
