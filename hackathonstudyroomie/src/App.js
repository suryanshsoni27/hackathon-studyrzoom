import './App.css';
import Header from "./components/Header"
import List from "./components/List"
import ParticlesBg from "particles-bg";



function App() {

  return (
    <div className="App">
       <ParticlesBg type="box" bg={true} color="blue" />
      <Header></Header>
      <List></List>
      {/*list1*/}
      {/*list2*/}
    </div>
  );
}

export default App;
