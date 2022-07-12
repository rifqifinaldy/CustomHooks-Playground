import { useEffect } from "react";
import Home from "./Page/Home/Home";

function App() {
  const google = () => {
    console.log("Googling")
  }


  useEffect(() => {
    google()
    return () => {
      
    }
  }, [])

  return (    
    <div className="App">
      <h1>Design Pattern asd</h1>
      <Home />
    </div>
  );
}

export default App;
