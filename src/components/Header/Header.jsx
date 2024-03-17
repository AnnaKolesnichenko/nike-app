import Icons from "../../UI/Icons";
import "./Header.scss";
import { RiSearch2Line } from "react-icons/ri";

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
          <Icons />
        </div>
      </div>
    </header>
  );
};
export default Header;
