import React, { useState } from "react";
import "./sidebar.css";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link, BrowserRouter as Router } from "react-router-dom";
const Sidebar = () => {
  const Links = [
    { url: "/resource", name: "Resource" },
    { url: "/project", name: "Project" },
    { url: "/formula", name: "Formula" }
  ];
  const [open, setOpen] = useState("open");
  const [style, setStyle] = useState("sidebar");
  const handleClick = () => {
    switch (open) {
      case "open":
        setOpen("close");
        setStyle("sidebar active");
        break;
      case "close":
        setOpen("open");
        setStyle("sidebar");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <MenuOpenIcon
        onClick={handleClick}
        className="icon-color"
        style={{ color: "#fff", fontSize: "36px" }}
      />
      <div className={style}>
        <Router>
          <ul className="router">
            {Links.map(link => (
              <li className="li">
                <Link className="link" to={link.url} onClick={handleClick}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Router>
      </div>
    </div>
  );
};
export default Sidebar;
