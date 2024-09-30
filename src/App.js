
// import { useState } from 'react';
import './App.css';
import Navbar from './componants/Navbar';
// import Alert from './componants/Alert';
import TextForm from './componants/TextForm';
import About from './componants/About';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 
  
} from "react-router-dom";


function App() {
  //   const [alert,setAlert] = useState(null)

  //   const showAlert=(massage,type)=>{
  //    setAlert({
  //     msg:massage,
  //     type:type
  //   })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 3000);
  // }

  const showAlert = (message, type) => {
    window.alert(`${type}: ${message}`);
}


  return (
    <>

{/* <Navbar/>  */} 
{/* <Router>
<Navbar title="Nectraglob" About="About"/>
<Alert alert={alert} />
  <div className="container">
  <Routes>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
            <TextForm heading="Welcome to the Convert Case Text Generator Tool...☺️ " showAlert={showAlert}/>
            </Route>
 </Routes>
    
  </div>
</Router> */}

<Router>
                <Navbar title="Nectraglob" About="About" />
                {/* <Alert alert={alert} /> */}
                <div className="container">
                    <Routes>  
                        <Route path="/about" element={<About/>} />  {/* Use element prop */}
                        <Route path="/Home" element={
                            <TextForm heading="Welcome to the Convert Case Text Generator Tool...☺️ " showAlert={showAlert} />
                        } />  
                    </Routes>
                </div>
            </Router>



</>
);
}





export default App;
