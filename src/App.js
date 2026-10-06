import './App.css';
import Labelnama from './components/labelnama';
import Labelalamat from './components/labelalamat';
import Button1 from './components/button1';

function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <Labelnama nama ="Budi"/>
      <Labelnama nama ="Anton"/>
      <Labelnama nama ="Sinta"/>
      <Labelalamat alamat="jalan kali"/>
      <p> Alamat : jalan kali</p>
      <Button1/>
    </div>
  );
}

export default App;
