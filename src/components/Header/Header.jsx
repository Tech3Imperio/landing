import "./Header.css";
import { imageLogo as image } from "../Assets/images";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img
          src={image[0]}
          alt="logo of Imperio Railing Systems"
          className="logo"
        />
        <div className="flexCenter h-menu">
          <button className="button">
            <a
              href="https://goo.gl/maps/WS9LBcQF6RsXW9mHA"
              target="_blank"
              rel="noreferrer"
            >
              Locate Us
            </a>
          </button>
        </div>

        {/* <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div> */}
      </div>
    </section>
  );
};

export default Header;
