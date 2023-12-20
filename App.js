
import Hoc from "./HOC/Hoc"
import Count from "./HOC/Count";

const UpdateComponent=Hoc(Count)
function App() {

  return (
    <div className="App">


  <UpdateComponent/>
    

    </div>
  );
}

export default App;
