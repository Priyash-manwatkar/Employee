import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EmployeeManagementApp from './Components/EmployeeManagementApp';
import EmployeeDetails from './Components/EmployeeDetails';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        < Routes>
        <Route path="/" element={<Navigate to="register" />} />
          <Route path="/register" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
