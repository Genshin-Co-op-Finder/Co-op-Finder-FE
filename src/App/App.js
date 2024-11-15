import "./App.css";
import Home from "../Home/Home";
import { useEffect, useState } from "react";

function App() {
  const [uid, setUid] = useState(null);
  const [display, setDisplay] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function saveForm(form) {
    sessionStorage.setItem("uid", form.target[0].value);
    sessionStorage.setItem("display", form.target[1].value);
    setDisplay(form.target[1].value);
    setUid(form.target[0].value);
    setIsLoggedIn(true);
  }

  function logout() {
    sessionStorage.clear();
    setIsLoggedIn(false);
  }

  function checkInformation() {
    console.log(sessionStorage.getItem("uid"));
    if (sessionStorage.getItem("uid") && sessionStorage.getItem("display")) {
      setUid(sessionStorage.getItem("uid"));
      setDisplay(sessionStorage.getItem("display"));
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    checkInformation();
  }, []);

  return (
    <>
      <header>
        <h1>Co-op Finder</h1>
        {!isLoggedIn ? (
          <form
            className="loginForm"
            onSubmit={(e) => {
              e.preventDefault();
              saveForm(e);
            }}
          >
            <h2>Please log in before starting</h2>
            <div className="uidInput">
              <input type="number" placeholder="UID" required></input>
              <input type="text" placeholder="Display Name" required></input>
              <button id="loginButton">Confirm</button>
            </div>
          </form>
        ) : (
          <div className="displayInformation">
            <h2>{display}</h2>
            <h2>{uid}</h2>
            <button id="loginButton" onClick={logout}>
              Change Uid & Display
            </button>
          </div>
        )}
      </header>
      <body>{isLoggedIn ? <Home /> : <> <h2>Please log in To see current lobbies </h2></>}</body>
    </>
  );
}

export default App;
