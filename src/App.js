import "./App.scss";
import Favourites from "./components/Favourites/Favourites";
import Header from "./components/Header/Header";
import ItemComponent from "./components/ItemComponent/ItemComponent";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemComponent />
      <Reviews />
      <Favourites />
    </div>
  );
}

export default App;
