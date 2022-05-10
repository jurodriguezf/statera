import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Welcome from "./pages/welcome/Welcome";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import MyProfile from "./pages/myProfile/MyProfile";
import {useState} from "react";

function App() {
  const [token, setToken] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login className="h-screen" setToken={setToken}/>}/>
        <Route path="/signUp" element={<SignUp className="h-screen" setToken={setToken}/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/" element={token ? <Home/> : <Welcome/>}/>
      </Routes>
    </div>
  );
}

export default App;
