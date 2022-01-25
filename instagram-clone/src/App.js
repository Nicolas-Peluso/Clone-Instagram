import Header from './Header';
import Style from "./app.module.css"
import Feed from './Feed/Feed';

function App() {
  return (
    <div className={Style.Container}>
      <Header />
      <Feed />
    </div>
  );
}

export default App;
