import { useEffect } from "react"
import {Outlet} from "react-router-dom"
// import Header from "./Header"
import { useState } from "react"
import useLocalStorage from "use-local-storage"

export default function Layout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      e.preventDefault();
      setWindowWidth(window.innerWidth);
    });
  }, []);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkTheme, setTheme] = useLocalStorage("dark-theme", defaultDark ? true : false);
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(menu => !menu)
  }
  const switchTheme = () => {
    setTheme(darkTheme => !darkTheme)
  }

  return (
    <div data-theme={darkTheme}>
      <header>
        <p className="hero">SULEI<span className="hero-span">MAN</span></p>
        {
          windowWidth < 650 ?
          <div>
            <img
            className="theme-icon"
            onClick={switchTheme}
            src={darkTheme ? "images/light-mode.png" : "images/dark-mode.png"}
            alt="Theme icon"
            />

            <img
            className="menu"
            onClick={toggleMenu}
            src={
              !menu && !darkTheme ?
              "images/menu-light.png" :
              !menu && darkTheme ?
              "images/menu-dark.png" :
              menu && !darkTheme ?
              "images/cancel-light.png" :
              "images/cancel-dark.png"
            }
            alt="Menu"
            />
          </div> :
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>        
        }

      </header>
      {menu && 
      <div className="menu-container">
        
      </div>
      }
      {menu ? "" : <Outlet />}
    </div>
  )
}