import { MainContextProvider } from "./context/MainContext";

import MainSolution from "./MainSolution";

function App() {
  return (
    <div className="container">
      <MainContextProvider>
        <MainSolution></MainSolution>
      </MainContextProvider>
    </div>
  );
}

export default App;
