import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import { TZProvider } from "./context-api/TZContext";

function App() {
  return (
    <TZProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </TZProvider>
  );
}

export default App;
