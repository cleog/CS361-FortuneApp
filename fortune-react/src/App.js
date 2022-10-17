import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AddFortunePage from './pages/AddFortunePage'
import EditFortunePage from './pages/EditFortunePage'
import ReceiveFortunePage from './pages/ReceiveFortunePage';
import MainLayout from './layouts/MainLayout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/add/:category" element={<AddFortunePage />} />
              <Route path="/get/:category" element={<ReceiveFortunePage />} />
              <Route path="/edit" element={<EditFortunePage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



// <BrowserRouter>
// <div className="App-header">
//   <Routes>
//     <Route path="/" element={<HomePage />}/>
//     <Route path="/add" element={<AddFortunePage />}/>
//     <Route path="/edit" element={<EditFortunePage />}/>
//   </Routes>
// </div>
// </BrowserRouter>