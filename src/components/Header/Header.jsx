import "./Header.scss";

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
          <svg>
            <use href="../../images/symbol-defs.svg#icon-Vector"></use>
          </svg>
          <ul className="icons">
            <li>
              <svg>
                <use href="../../images/symbol-defs.svg#icon-heart"></use>
              </svg>
            </li>
            <li>
              <svg className="icon">
                <use href="../../images/symbol-defs.svg#icon-bag"></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
