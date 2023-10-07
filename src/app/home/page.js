import CardComponents from "./CardComponents";
import FooterComponents from "./FooterComponents";
import "./HomeCss.css";
import NavbarComponents from "./NavbarComponents";
const HomePage = () => {
  return (
    <>
      <div className="Home">
        <NavbarComponents />
        <div className="Hero">
          <h1 className="HeroTitle">RAJUTAN KODING</h1>
          <h1 className="HeroText">Your Digital Solution</h1>
          <button className="HeroP btn btn-wide btn-sm btn-outline">
            part of YAAPTECH
          </button>
        </div>
        <div className="divider">Our Services</div>
        <div className="HomeContent">
          <CardComponents />
          <CardComponents />
          <CardComponents />
          <CardComponents />
        </div>
        <FooterComponents />
      </div>
    </>
  );
};

export default HomePage;
