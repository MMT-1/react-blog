import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Utility/Footer';
import Navbar from './Components/Utility/Navbar';
import PostDetails from './Components/Single/PostDetails';
import HomePage from './Page/Home/HomePage';
import Login from './Page/Login/Login';
import SinglePage from './Page/Single/SinglePage';


function App() {
  
  return (
    <div className="App ">
      <BrowserRouter>

        <Routes>
          <Route index element={<HomePage />} />
          <Route path={'post/:id'} element={<SinglePage />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}


export default App;
