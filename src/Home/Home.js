import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  const [lobbies, setLobbies] = useState([
  { title: "CosmicConquerors", displayName: "Player1", uid: "user1", playersJoin: 3, playersMax: 5, tags: ["friendship"] },
  { title: "PhantomSquad", displayName: "Player2", uid: "user2", playersJoin: 2, playersMax: 4, tags: ["worldBoss"] },
  { title: "NebulaWarriors", displayName: "Player3", uid: "user3", playersJoin: 1, playersMax: 6, tags: ["kath"] },
  { title: "ShadowStrikers", displayName: "Player4", uid: "user4", playersJoin: 4, playersMax: 4, tags: ["domain"] },
  { title: "VoidRiders", displayName: "Player5", uid: "user5", playersJoin: 5, playersMax: 5, tags: ["weeklyBoss"] },
  { title: "GalacticGuards", displayName: "Player6", uid: "user6", playersJoin: 0, playersMax: 5, tags: ["friendship"] },
  { title: "ChaosLegion", displayName: "Player7", uid: "user7", playersJoin: 2, playersMax: 3, tags: ["worldBoss"] },
  { title: "AetherKnights", displayName: "Player8", uid: "user8", playersJoin: 3, playersMax: 6, tags: ["kath"] },
  { title: "QuantumRaiders", displayName: "Player9", uid: "user9", playersJoin: 4, playersMax: 5, tags: ["domain"] },
  { title: "StarlightSentinels", displayName: "Player10", uid: "user10", playersJoin: 1, playersMax: 4, tags: ["weeklyBoss"] },
  { title: "EclipseVanguard", displayName: "Player11", uid: "user11", playersJoin: 2, playersMax: 5, tags: ["friendship"] },
  { title: "NovaElite", displayName: "Player12", uid: "user12", playersJoin: 0, playersMax: 4, tags: ["worldBoss"] },
  { title: "CelestialWolves", displayName: "Player13", uid: "user13", playersJoin: 3, playersMax: 3, tags: ["kath"] },
  { title: "InfinityRaiders", displayName: "Player14", uid: "user14", playersJoin: 4, playersMax: 6, tags: ["domain"] },
  { title: "OblivionOrder", displayName: "Player15", uid: "user15", playersJoin: 5, playersMax: 5, tags: ["weeklyBoss"] }
  ]);
  const [filteredLobbies, setFilteredLobbies] = useState(lobbies);

  useEffect(() => {
    filteredSearch();
  }, [filters, search, lobbies]);

  function displayLobbies() {
    return filteredLobbies.map((lobby) => (
      <div id={lobby.id} className="lobby">
        <h3>{lobby.title}</h3>
        <p>Host : {lobby.displayName}-{lobby.uid}</p>
        <p>Players in lobby : {lobby.playersJoin}/{lobby.playersMax}</p>
        <p>Tags : {displayTags(lobby.tags)}</p>
        <button onClick={()=>joinLobby(lobby.id)}>Join</button>
      </div>
    ));
  }
  function joinLobby(id){
    console.log(id)
  }
  function displayTags(tags) {
    if (!Array.isArray(tags) || tags.length === 0) return "No tags available";
    const readableTags = tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(", ");
    return readableTags; 
  }
  
  function filteredSearch() {
    let filteredList = lobbies;

    if (filters.length > 0) {
      filteredList = filterLobbies(filteredList);
    }
    if (search) {
      filteredList = dynamicSearch(filteredList);
    }
    setFilteredLobbies(filteredList);
  }

  function dynamicSearch(lobbyList) {
    return lobbyList.filter((lobby) =>
      lobby.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  function filterLobbies(lobbyList) {
    return lobbyList.filter((lobby) =>
      filters.some((filter) => lobby.tags.includes(filter))
    );
  }

  function activateFilter(tag) {
    setFilters((prevFilters) =>
      prevFilters.includes(tag)
        ? prevFilters.filter((filter) => filter !== tag)
        : [...prevFilters, tag]
    );
  }

  return (
    <>
      <div className="filterBar">
        <button id="createLobbyBtn">Create Lobby</button>
        <aside className="filters">
          <button className="tab-button" id="friendshipBtn" onClick={() => activateFilter("friendship")}>Friendship</button>
          <button className="tab-button" id="worldBossBtn" onClick={() => activateFilter("worldBoss")}>World Bosses</button>
          <button className="tab-button" id="kathBtn" onClick={() => activateFilter("kath")}>Kath / Dailies</button>
          <button className="tab-button" id="domainBtn" onClick={() => activateFilter("domain")}>Domains</button>
          <button className="tab-button" id="weeklyBossBtn" onClick={() => activateFilter("weeklyBoss")}>Weekly Bosses</button>
        </aside>
        <input
          id="searchbar"
          placeholder="Search..."
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="lobby-holder">
        {displayLobbies()}
      </div>
    </>
  );
}

export default Home;
