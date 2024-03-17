import "./Header.scss";
import { IoHeartOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import { CiShoppingBasket } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <div className="authentication">
        <div className="help-section">
          <ul>
            <li>
              <span>098 900 09 09</span>
            </li>
            <li>
              <a href="/">Допомога</a>
            </li>
          </ul>
        </div>
        <div className="auth">
          <ul>
            <li>
              <a href="/">Увійти</a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <a href="/">Зареєструватися</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navigation">
        <div className="logo">
          <a href="/">IGNAT</a>
        </div>{" "}
        <div>
          <nav>
            <ul className="menu-items">
              <li>
                <a href="/">новинки</a>
              </li>
              <li>
                <a href="/">чоловіки</a>
              </li>
              <li>
                <a href="/">жінки</a>
              </li>
              <li>
                <a href="/">аксесуари</a>
              </li>
              <li>
                <a href="/">акції</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="extra-nav">
          <input type="text" />
          <RiSearch2Line className="search-icon" />
          <ul className="icons">
            <li>
              <IoHeartOutline className="icon" />
            </li>
            <li>
              <CiShoppingBasket className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
