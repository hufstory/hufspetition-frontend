import React, {useState} from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Notice from './pages/notice';
import Hotboard from "./pages/hot-board";
import Freeboard from "./pages/free-board";
import Petition from "./pages/Petition/petition";
import Endpetition from "./pages/Petition/end-petition";
import Mypage from "./pages/mypage";
import QA from "./pages/q&a";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/Login/CreateAccount";
import Connect from "./pages/connect";


function App() {
    const [color] = useState("#EAE6E2");

    document.body.style.backgroundColor = color;
    return (
        <Router>
            <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/notice' exact element={<Notice />} />
            <Route path='/hot-board' exact element={<Hotboard />} />
            <Route path='/free-board' exact element={<Freeboard />} />
            <Route path='/petition' exact element={<Petition />} />
            <Route path='/end-petition' exact element={<Endpetition />} />
            <Route path='/Mypage' exact element={<Mypage />} />
            <Route path='/q&a' exact element={<QA />} />
            <Route path='/SignIn' exact element={<Login />} />
            <Route path='/CreateAccount' exact element={<CreateAccount />} />
            <Route path='/connect' exact element={<Connect />} />
        </Routes>
        </Router>
        
    ); 
}

export default App;


