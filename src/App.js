import { MainContextProvider } from "./context/MainContext";
import { ButtonSave } from "./components/soluzionePatrizia/ButtonSave";
import MainSolution from "./MainSolution";

function App() {
  return (
    <div className="container">
      <MainContextProvider>
        <ButtonSave></ButtonSave>
        <MainSolution></MainSolution>
      </MainContextProvider>
    </div>
  );
}

export default App;
