import { DataProvider } from "./Data/DataContext";
import Home from "./Screens/Home/Home";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  );
}

export default App;
