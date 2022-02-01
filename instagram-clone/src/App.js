import "./app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home';
import GlobalContext from "./GlobalContext";
import Header from './Header';
import Login from "./User/Login";

function App() {
  return (
    <GlobalContext>
      <div className="Container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalContext>
  );
}

export default App;
