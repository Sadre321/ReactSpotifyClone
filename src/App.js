import Sidebar from "Components/Sidebar";
import PlayerBar from "Components/PlayerBar";
import Content from "Components/Content";

function App() {
  return (
    <>
    <div className="wrapper">
      <Sidebar/>
      <Content/>
    </div>
    <PlayerBar/>
    </>
  );
}

export default App;
