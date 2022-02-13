import "./app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home';
import GlobalContext from "./GlobalContext";
import Header from './Header';
import Login from "./User/Login";
import Conta from "./Conta/Conta";
import Photo from "./UserPhoto/Photo";

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <GlobalContext>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={<Conta />} />
            <Route path="Postar/*" element={<Photo />} />
          </Routes>

        </GlobalContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
