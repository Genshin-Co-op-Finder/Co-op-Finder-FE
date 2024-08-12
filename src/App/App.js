import './App.css';
import Home from '../Home/Home'

function App() {
  return (
   <>
    <header>
      <h1>Co-op Finder</h1>
      <form>
        <h2>Please enter your uid and display name before starting</h2>
        <input type = 'number' placeholder='UID'></input>
        <input type = 'text' placeholder='Display Name'></input>
        <button>Confirm</button>
      </form>
    </header>
    <body>
      <Home/>
    </body>
   </>
  );
}

export default App;
