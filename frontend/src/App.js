import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={LoginScreen} exact />
      <Route path="/home" component={HomeScreen} />
      <Route path="/register" component={RegistrationScreen} />
    </BrowserRouter>
  );
}

export default App;
