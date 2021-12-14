import './App.css';
import {React} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudent from './components/AddStudent';


function App() {

  return <>
  <Router>
    <div style={{display: "grid",gridTemplateColumns:"17% 80%"}}>
        <div>
            <Sidebar />
        </div> 
        {/* <Dashboard /> */}
        <div>
        <Routes>
            <Route path='/dashboard' element={<Dashboard value={{earn:"30,000",annual:"120,000",task:"20"}}/>} />
            <Route path='/add-student' element={<AddStudent value={{earn:"30,000",annual:"120,000",task:"20"}}/>} />
            <Route path='/all-students' element={<AllStudents value={{earn:"30,000",annual:"120,000",task:"20"}}/>} />
        </Routes>
        </div>
    </div>
  </Router>
    </>
}

export default App;
