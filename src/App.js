import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import { UserAuthContextProvide } from "./context/UserAuthContext";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <UserAuthContextProvide>
            <Routes>
            <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </UserAuthContextProvide>
        </div>
      </div>
    </div>
  );
}

export default App;
