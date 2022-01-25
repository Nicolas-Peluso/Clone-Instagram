import Style from "./app.module.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home';
import GlobalContext from "./GlobalContext";
import UserLogin from "./User/UserLogin";
import Header from './Header';

function App() {
  return (
    <GlobalContext>
      <div className={Style.Container}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<UserLogin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalContext>
  );
}

export default App;
