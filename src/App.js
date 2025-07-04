
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#002b5d';
      showAlert("Dark mode has been enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
      setAlert({
        msg: message,
        type: type
     });
     setTimeout (()=>{
        setAlert(null);
     },3000);
  };
  return (
    <>
    {/*<BrowserRouter>
      <Navbar title="Word Counter" mode={mode} aboutText={"About"} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-5">        
              <Routes>
                <Route path="/about" element={<About />}/>	
                <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text" mode={mode}/>}/> 
              </Routes>     
          
        </div>  
    </BrowserRouter>    */}
    <Navbar title="Word Counter" mode={mode} aboutText={"About"} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-5">     
      <TextForm showAlert={showAlert} heading="Enter your text" mode={mode}/>
      </div>
    </>
  );
}
export default App;
