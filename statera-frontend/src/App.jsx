import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Welcome from "./pages/welcome/Welcome";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import MyProfile from "./pages/myProfile/MyProfile";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login className="h-screen"/>}/>
                <Route path="/signUp" element={<SignUp className="h-screen"/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/my-profile" element={<MyProfile/>}/>
                <Route path="/"
                       element={
                           // TODO: check for account log status
                           1 === 0 ? <Home/> : <Navigate to="/welcome" replace/>
                       }
                />
            </Routes>
        </div>
    );
}

export default App;
