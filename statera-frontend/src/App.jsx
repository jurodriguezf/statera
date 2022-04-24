import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <div className="App">
        <Login className="h-screen"/>
        <SignUp className="h-screen"></SignUp>
        <Welcome/>
    </div>
  );
}

export default App;
