import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import HomePageAdvanced from './pages/HomePageAdvanced'
import AddFortunePage from './pages/AddFortunePage'
import EditFortunePage from './pages/EditFortunePage'
import ReceiveFortunePage from './pages/ReceiveFortunePage';
import HistoryPage from './pages/HistoryPage';
import WhatsNew from './pages/WhatsNew';
import InstructionsPage from './pages/InstructionsPage';
import MainLayout from './layouts/MainLayout';
import AddUserPage from './pages/AddUserPage';
import MyFortunesPage from './pages/MyFortunesPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/advanced" element={<HomePageAdvanced/>} />
              <Route path="/whatsnew" element={<WhatsNew/>} />
              <Route path="/instructions" element={<InstructionsPage/>} />
              <Route path="/history" element={<HistoryPage/>} />
              <Route path="/add/:category" element={<AddFortunePage />} />
              <Route path="/get/:category" element={<ReceiveFortunePage />} />
              <Route path="/edit" element={<EditFortunePage />} />
              <Route path="/user" element={<AddUserPage />} />
              <Route path="/mywrittenfortunes" element={<MyFortunesPage />} />
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