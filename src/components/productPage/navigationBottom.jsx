import { Link } from "react-router-dom";

function NavigationBottom() {
  const NavigationICons = [
    {
      name: "Home",
      icon: "../navigation-bottom/home.svg",
      href: "/",
    },
    {
      name: "Bag",
      icon: "../navigation-bottom/bag.svg",
      href: "/cart",
    },
    {
      name: "Checkout",
      icon: "../navigation-bottom/checkout.svg",
      href: "/checkout",
    },
    {
      name: "Settings",
      icon: "../navigation-bottom/settings.svg",
      href: "/settings",
    },
  ];

  return (
    <div className="navigation-bottom">
    <ul className="navigation-bottom-wrapper">
      {NavigationICons.map((item) => (
        <li key={item.name}>
          <Link to={item.href}>
            <img src={item.icon} alt={item.name} />
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default NavigationBottom;
