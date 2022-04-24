import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Welcome from "./pages/welcome/Welcome";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={ <Login className="h-screen"/>} />
            <Route path="/signUp" element={<SignUp className="h-screen"/>} />
        </Routes>
    </div>
  );
}

export default App;
