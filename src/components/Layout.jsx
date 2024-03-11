import {Outlet} from "react-router-dom"
// import Header from "./Header"
import { useState } from "react"

export default function Layout() {
  const [menu, setMenu] = useState(false)
  const [dark, setDark] = useState(true)
  const toggleMenu = () => {
    setMenu(menu => !menu)
  }
  const toggleDark = () => {
    setDark(dark => !dark)
  }

  return (
    <>
      <header>
        <p onClick={toggleDark} className="hero">SULEI<span className="hero-span">MAN</span></p>
        <img
        className="menu"
        onClick={toggleMenu}
        src={
          !menu && !dark ?
          "images/menu-light.png" :
          !menu && dark ?
          "images/menu-dark.png" :
          menu && !dark ?
          "images/cancel-light.png" :
          "images/cancel-dark.png"
        }
        alt="Menu"
        />
      </header>
      {menu && 
      <div>
        Here we go
      </div>
      }
      {menu ? "" : <Outlet />}
    </>
  )
}