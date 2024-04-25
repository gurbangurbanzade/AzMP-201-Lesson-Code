import LefSide from "./LefSide";
import RightSide from "./rightSide";
import "./style.css";
import "./newStyle.scss";

const Header = () => {
  return (
    <div className="layout">
      <LefSide />
      <RightSide />
    </div>
  );
};

export default Header;
