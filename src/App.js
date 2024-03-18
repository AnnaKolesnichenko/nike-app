import "./App.scss";
import Contacts from "./components/Contacts/Contacts";
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
      <Contacts />
    </div>
  );
}

export default App;
