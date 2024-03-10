export default function Header() {
  const openMenu = () => {
    return (
      <div style={{backgroundColor: "green", width: "100vw", top: 0, left: 0}}>
        <div>
          <h1 style={{color: "red"}}>Here We Go</h1>
        </div>
      </div>
    )
  }
  
  return (
    <header>
      <p className="hero">SULEI<span className="hero-span">MAN</span></p>
      <img className="menu" onClick={openMenu} src="images/menu-2.png" alt="Menu" />
    </header>
  )
}