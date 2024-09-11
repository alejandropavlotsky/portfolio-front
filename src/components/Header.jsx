import { useEffect, useState } from "react";
import "../styles/sass/header.scss"

export const Header = () => {

  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    })
  }, [])


  return (
    <header  id={navBar ? 'header-dark' : 'header'}>
      <nav>
        <ul>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}