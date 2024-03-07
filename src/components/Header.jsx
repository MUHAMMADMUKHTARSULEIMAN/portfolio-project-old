// import {
//   gsap,
//   ScrollTrigger
// } from "gsap";

export default function Header() {
  // const showAnim = gsap.from('.main-tool-bar', { 
  //   yPercent: -100,
  //   paused: true,
  //   duration: 0.2
  // }).progress(1);
  
  // ScrollTrigger.create({
  //   start: "top top",
  //   end: "max",
  //   onUpdate: (self) => {
  //     self.direction === -1 ? showAnim.play() : showAnim.reverse()
  //   }
  // });
  
  return (
    <header>
      <p className="hero">SULEI<span className="hero-span">MAN</span></p>
      <img className="menu" src="images/menu-2.png" alt="Menu" />
    </header>
  )
}