import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkEl = links.map(link => {
    return <a key={link} href={"#"+link}>{link}</a>
  })
  return <nav>{linkEl}</nav>;
}

export default NavBar;
