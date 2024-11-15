function getLobbies() {
  return fetch("http://127.0.0.1:5000", {
    method: "GET",
  }) // Change to deployed link later
    .then((res) => {
      if (!res.ok) {
        console.error("Failed to fetch lobbies");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
}

function createLobby(title, playersMax, tags, uid, displayName) {
  return fetch("http://127.0.0.1:5000", {
    method: "POST",
    body: JSON.stringify({
      title,
      playersMax,
      tags,
      uid,
      displayName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        console.error("Failed to create Lobby");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
}
