import {Routes, Route} from "react-router-dom";

import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Welcome from "./pages/welcome/Welcome";

import Home from "./pages/home/Home";
import MyProfile from "./pages/myProfile/MyProfile";
import Favorites from "./pages/favorites/Favorites";

import useToken from "./util/useToken";
import EditProfile from "./pages/editProfile/EditProfile";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import GetMenu from "./pages/getMenu/GetMenu";

function App() {
    const {token, setToken} = useToken();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login className="h-screen" setToken={setToken}/>}/>
        <Route path="/signUp" element={<SignUp className="h-screen" setToken={setToken}/>}/>
        <Route path="/my-profile" element={<MyProfile token={token}/>}/>
        <Route path="/edit-profile" element={<EditProfile token={token}/>}/>
        <Route path="/favorites" element={<Favorites token={token}/>}/>
        <Route path="/add-recipe" element={<AddRecipe token={token}/>}/>
        <Route path="/get-menu" element={<GetMenu token={token}/>}/>
        <Route path="/" element={token ? <Home token={token}/> : <Welcome/>}/>
      </Routes>
    </div>
  );
}

export default App;
