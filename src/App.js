import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" />
    <TextForm heading="Enter text to analyze below"/>
    <div className="container mx-3">
      <About/>
    </div>
    </>

  );
}

export default App;
