import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <div className="App flex">
      <SignUp className="w-3/6 h-screen"/>
      <Login className="w-3/6 h-screen"/>
    </div>
  );
}

export default App;
