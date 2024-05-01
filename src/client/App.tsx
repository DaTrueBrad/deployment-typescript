import "./App.css";
import { useState } from "react";
import Header from "./Header.js";
import axios from "axios";

function App() {
  const [fortune, setFortune] = useState("Any fortune acquired from the Genie goes here...");

  const handleClick = () => {
    setFortune("Getting fortune...")
    axios.get('/api/fortune')
    .then((res:any) => {
      console.log(res)
      setFortune(res.data)
    })
    .catch((err:any) => {
      console.error(err)
      setFortune("Genie (server) could not be reached :(")
    })
  }

  return (
    <main>
      <Header />
      <div id="center-area">
        <button onClick={handleClick}>Get Fortune</button>
        <h2 id="fortune">{fortune}</h2>
      </div>
    </main>
  );
}

export default App;
