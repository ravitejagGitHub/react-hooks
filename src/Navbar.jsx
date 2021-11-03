import { Link } from "react-router-dom";

export const Navbar = () => {
  const navbarItems = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/custom-hook",
      label: "Custom Hook",
    },
    {
      to: "/usecallback",
      label: "Usecallback",
    },
    {
      to: "/usememo",
      label: "Usememo",
    },
    {
      to: "/usestate",
      label: "Usestate",
    },
    {
      to: "/usereducer",
      label: "Usereducer",
    },
    {
      to: "/useeffect",
      label: "Useeffect",
    },
    {
      to: "/useref",
      label: "Useref",
    },
    {
      to: "usememo",
      label: "Usememo",
    },
    {
      to: "/uselayout",
      label: "Uselayout",
    },
    {
      to: "/useimperative",
      label: "Useimperative",
    },
    {
      to: "/usecontext",
      label: "Usecontext",
    },
  ];
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {navbarItems.map((item) => {
          return (
            <li>
              <Link to={item.to}> {item.label} </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
