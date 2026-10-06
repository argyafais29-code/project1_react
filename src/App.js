import './App.css';
import Labelnama from './components/labelnama';
import Labelalamat from './components/labelalamat';

function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <Labelnama nama ="Budi"/>
      <Labelnama nama ="Anton"/>
      <Labelnama nama ="Sinta"/>
      <Labelalamat alamat="jalan kali"/>
      <p> Alamat : jalan kali</p>
    </div>
  );
}

export default App;
