import "./App.css";
import Home from "../Home/Home"
import { useEffect, useState } from "react";

function App() {
  const [uid, setUid] = useState(null);
  const [display, setDisplay] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function saveForm(form) {
    sessionStorage.setItem("uid", form.target[0].value);
    sessionStorage.setItem("display", form.target[1].value);
    setDisplay(form.target[1].value)
    setUid(form.target[0].value)
    setIsLoggedIn(true);
  }

  function logout(){

    setIsLoggedIn(false)
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
            onSubmit={(e) => {
              e.preventDefault();
              saveForm(e);
            }}
          >
            <h2>Please enter your uid and display name before starting</h2>
            <input type="number" placeholder="UID" required></input>
            <input type="text" placeholder="Display Name" required></input>
            <button>Confirm</button>
          </form>
        ) : (
          <>
            <h2>Welcome: {display}</h2>
            <h2>{uid}</h2>
            <button onClick={logout}>Change Uid & Display</button>
          </>
        )}
      </header>
      <body>
        <Home />
      </body>
    </>
  );
}

export default App;
