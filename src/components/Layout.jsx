import { useEffect} from "react"
import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import {NavLink, Outlet} from "react-router-dom"
import { useState } from "react"
import useLocalStorage from "use-local-storage"

export default function Layout() {
  gsap.registerPlugin(useGSAP)
  useGSAP(() => {
    const tl = gsap.timeline()
    // tl.from(".header", {opacity: 0, y: -64, duration: 1, delay: 1, ease: "slow"})
    tl.from(".hero", {opacity: 0, duration: 1.5, scale: 0.2, delay: 1, ease: "circ.in"})
    tl.from(".theme-icon", {opacity: 0, duration: 1, ease: "expo.in"}, "+=1")
    tl.from(".menu", {opacity: 0, duration: 1,scale: 0.2, ease: "expo.in"})
    tl.from(".home-para", {opacity: 0, duration: 1, scale: 0.2, ease: "expo.in"})
    tl.from(".home-main", {duration: 1, opacity: 0, scale: 0.2, ease: "expo.in"}, "+=.5")
    // tl.from(".outlet", {opacity: 0, duration: 2, ease: "circle.inOut"})
  })


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
      <header className="header">
        {/* <p className="hero">SULEI<span className="hero-span">MAN</span></p> */}
        <NavLink to="/" onClick={menu ? toggleMenu : ""}>
          <div className="hero-container">
            <img
            src={darkTheme ? "images/hero-dark.png" : "images/hero-light.png"}
            alt="Logo"
            className="hero"
            />       
          </div>

        </NavLink>
        {
          windowWidth < 750 ?
          <div className="mobile-nav">
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
          <div className="desktop-nav">
            <img
            className="theme-icon"
            onClick={switchTheme}
            src={darkTheme ? "images/light-mode.png" : "images/dark-mode.png"}
            alt="Theme icon"
            />            
            <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/about">
              <p>ABOUT</p>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="projects">
              <p>PROJECTS</p>
              </NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="contact">
              <p>CONTACT</p>
              </NavLink>
          </div>        
        }
      </header>
      {menu && windowWidth < 750 &&
      <div className="menu-container">
        <NavLink onClick={menu ? toggleMenu : ""} className={({isActive}) => isActive ? "active-link" : ""} to="/about">
          <p>ABOUT</p>
        </NavLink>
        <hr/>
        <NavLink onClick={menu ? toggleMenu : ""} className={({isActive}) => isActive ? "active-link" : ""} to="projects">
          <p>PROJECTS</p>
        </NavLink>
        <hr/>
        <NavLink onClick={menu ? toggleMenu : ""} className={({isActive}) => isActive ? "active-link" : ""} to="contact">
          <p>CONTACT</p>
        </NavLink>
      </div>
      }
      {menu && windowWidth < 750 ? "" : <div className="outlet"><Outlet/></div>}
    </div>
  )
}